import React, {useState, useEffect} from "react";
// import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Api from "./Api.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";

const App = () => {
    const [data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("shopUser"));
    const [popupActive, changePopupActive] = useState(false);
    const [api, setApi] = useState(new Api(token));

    useEffect(() => {
        console.log("user is changed");
        setApi(new Api(token));
    }, [token])

    // useEffect(() => {
    //     fetch("https://api.react-learning.ru/products", {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setGoods(data.products);
    //             setData(data.products);
    //         });
    // }, []);

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                    setData(data.products);
                })
            // console.log("Данные из сервера", data);
            api.showProfile()
                .then(res => res.json())
                .then(data => {
                    console.log("User", data);
                })
        } else {
            setGoods([]);
            setData([]);
        }
    }, [api])

    return <>
        <div className="wrapper">
            <Header products={data} update={setGoods} openPopup={changePopupActive} user={!!token} setToken={setToken}/>
            <Catalog goods={goods}/>
            <Footer/>
        </div>
        {!token && <Modal isActive={popupActive} changeActive={changePopupActive} setToken={setToken} api={api} />}
    </>
}

export default App;