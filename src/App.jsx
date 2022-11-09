import React, {useState, useEffect} from "react";
// import Catalog from "./pages/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";
// import Modal from "./components/Modal";
// import Api from "./Api.js";
// import { Container, Row, Col } from "react-bootstrap";
import Main from "./MainPage/main";

const App = () => {
    // const [data, setData] = useState([]);
    // const [goods, setGoods] = useState([]);
    // const [token, setToken] = useState(localStorage.getItem("shopUser"));
    // const [popupActive, changePopupActive] = useState(false);
    // const [api, setApi] = useState(new Api(token));

    // useEffect(() => {
    //     console.log("user is changed");
    //     setApi(new Api(token));
    // }, [token])

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

    // useEffect(async () => {
    //     let data = await api.getProducts();
    //     // console.log("Данные из сервера", data);
    //     setGoods(data.products);
    //     setData(data.products);
    // }, [])

    // return <>
    //     <div className="wrapper">
    //         <Header products={data} update={setGoods} openPopup={changePopupActive}/>
    //         <Catalog goods={goods}/>
    //         <Footer/>
    //     </div>
    //     <Modal isActive={popupActive} changeActive={changePopupActive}/>
    // </>
    return <Main/>
}

export default App;