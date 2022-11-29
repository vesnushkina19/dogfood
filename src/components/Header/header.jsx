import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo/logo";
import { Context } from "../../App";
import "./header.css";
import {BoxArrowInRight, BoxArrowLeft} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./images/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./images/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./images/ic-profile.svg";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ChevronRight, PlusCircle } from "react-bootstrap-icons";



export default ({update, openPopup, user, setToken, setUser, likes}) => {
    const {searchText, search, setProducts, goods} = useContext(Context);
    const [cnt, setCnt] = useState(0);
    const handler = e => {
        search(e.target.value);
        const result = goods.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        setProducts(result);
    }
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("shopUser");
        localStorage.removeItem("user");
        setToken("");
        setUser({});
    }
    
    return <>
    <header className="sticky-md-top">
    <Logo/>
    <input type="search" value={searchText} onChange={handler} placeholder="Поиск"/>
    <nav>
        {user && <Link to="" className="favIcon position-relative">
            <FavIcon/>
            <span className="badge rounded-pill bg-success position-absolute top-0 start-100 translate-middle">{likes}</span>
        </Link>}
        {user && <Link to="/cart"><CartIcon/></Link>}
        {user && <Link to="/add"><PlusCircle/></Link>}
        {user &&<Link to="/profile"><ProfileIcon/></Link>}
        {user &&<a href="" onClick={logout} style={{fontSize: "1.6rem"}}><BoxArrowLeft/></a>}
        {!user && <a href="" onClick={e => {e.preventDefault(); openPopup(true)}} style={{fontSize: "1.6rem"}}><BoxArrowInRight/></a>}
    </nav>
</header>
</>
}
