import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Api from "./Api.js";
import Local from "./Local";


import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, ButtonGroup, } from "react-bootstrap";

const App = () => {
    const [data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    const [token, setToken] = useState(Local.getItem("shopUser"));
    const [user, setUser] = useState(Local.getItem("user", true));
    const [popupActive, changePopupActive] = useState(false);
    const [api, setApi] = useState(new Api(token));

    useEffect(() => {
        console.log("user is changed");
        setApi(new Api(token));
    }, [token])

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
            <Header
                products={data}
                update={setGoods} 
                openPopup={changePopupActive} 
                user={!!token} 
                setToken={setToken} 
                setUser={setUser}/>
            {/* <Catalog goods={goods}/> */}
            {/* <Product/> */}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/catalog" element={<Catalog goods={goods}/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/profile" element={<Profile user={{user}}/>}/>
            </Routes>
            <Footer/>
        </div>
        {!token && <Modal 
            isActive={popupActive} 
            changeActive={changePopupActive} 
            setToken={setToken} 
            api={api} 
            setUser={setUser}
        />}
    </>
}

export default App;


// export default () => {
//     return <Main/>
// }