import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Api from "./Api.js";
import Local from "./Local";
import AddProduct from "./pages/AddProduct";
import mockData from "./assets/data.json"; 
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const Context = React.createContext({});

const getInitialCart = () => {
  const savedCart = Local.getItem("cart", true);
  return Array.isArray(savedCart) ? savedCart : [];
};

const App = () => {
  const [data, setData] = useState([]);
  const [goods, setGoods] = useState([]);
  const [token, setToken] = useState(Local.getItem("shopUser"));
  const [user, setUser] = useState(Local.getItem("user", true));
  const [popupActive, changePopupActive] = useState(false);
  const [api, setApi] = useState(new Api(token));
  const [fav, setFav] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchText, search] = useState("");
  const [cart, setCart] = useState(getInitialCart);

  // Если токен поменялся — обновляем api-инстанс
  useEffect(() => {
    setApi(new Api(token));
  }, [token]);

  // ВРЕМЕННО: загружаем товары из локального файла, чтобы каталог работал без интернета/API
  useEffect(() => {
    const list = Array.isArray(mockData?.products)
      ? mockData.products
      : Array.isArray(mockData)
      ? mockData
      : [];

    setGoods(list);
    setData(list);
    setProducts(list);
  }, []);

  // Профиль подгружаем только если есть токен
  useEffect(() => {
    if (!token || String(token).startsWith("local-token-")) return;

    api
      .showProfile()
      .then((profile) => {
        setUser(profile);
        Local.setItem("user", profile, true);
      })
      .catch((err) => {
        console.error("Ошибка загрузки профиля:", err);
      });
  }, [api, token]);

  useEffect(() => {
    Local.setItem("cart", cart, true);
  }, [cart]);

  // Избранное (если есть user и likes)
  useEffect(() => {
    const userId = user?._id;
    if (!userId || !Array.isArray(goods)) {
      setFav([]);
      return;
    }

    const f = goods.filter(
      (el) => Array.isArray(el.likes) && el.likes.includes(userId)
    );
    setFav(f);
  }, [goods, user]);

  const cartCount = cart.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  return (
    <Context.Provider
      value={{
        goods,
        setGoods,
        data,
        setData,
        products,
        setProducts,
        searchText,
        search,
        api,
        setApi,
        user,
        setUser,
        cart,
        setCart,
      }}
    >
      <Header
        update={setGoods}
        openPopup={changePopupActive}
        user={!!token}
        setToken={setToken}
        setUser={setUser}
        likes={fav.length}
        cartCount={cartCount}
      />

      <div className="wrapper main__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/catalog" element={<Catalog setFav={setFav} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/profile"
            element={<Profile user={user} setToken={setToken} setUser={setUser} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />

      {!token && (
        <Modal
          isActive={popupActive}
          changeActive={changePopupActive}
          setToken={setToken}
          setUser={setUser}
        />
      )}
    </Context.Provider>
  );
};

export { App, Context };
