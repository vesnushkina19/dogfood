import React, {useState} from "react";
import Logo from "../Logo/logo";
import "./header.css";
import {BoxArrowInRight, BoxArrowLeft} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./images/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./images/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./images/ic-profile.svg";

export default ({products, update, openPopup, user, setToken}) => {
    const [text, changeText] = useState("");
    const [cnt, setCnt] = useState(0);
    const handler = e => {
        changeText(e.target.value);
        const result = products.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        setCnt(result.length);
        if (!text) {
            update(products);
        } else {
            update(result);
        }
    }
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("shopUser");
        setToken("");
    }

    return <>
    <header>
        <Logo/>
        <input type="search" value={text} onChange={handler}/>
        <nav>
            {user && <a href=""><FavIcon/></a>}
            {user && <a href=""><CartIcon/></a>}
            {user &&<a href=""><ProfileIcon/></a>}
            {user &&<a href="" onClick={logout} style={{fontSize: "1.6rem"}}><BoxArrowLeft/></a>}
            {!user && <a href="" onClick={e => {e.preventDefault(); openPopup(true)}} style={{fontSize: "1.6rem"}}><BoxArrowInRight/></a>}
        </nav>
    </header>
    <div>
        {text ? `По запросу ${text} найдено ${cnt} позиций` : "Поиск..."}
    </div>
    </>
}

