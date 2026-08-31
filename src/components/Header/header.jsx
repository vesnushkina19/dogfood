import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo/logo";
import { Context } from "../../App";
import "./header.css";
import {BoxArrowInRight, BoxArrowLeft} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./images/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./images/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./images/ic-profile.svg";
import { PlusCircle } from "react-bootstrap-icons";

export default ({update, openPopup, user, setToken, setUser, likes, cartCount = 0}) => {
    const {searchText, search, setProducts, goods} = useContext(Context);
    const safeCartCount = Number(cartCount) || 0;

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
        {user && <Link to="" className="header__icon-link favIcon position-relative" aria-label={`Избранное: ${likes}`}>
            <FavIcon/>
            <span className="badge rounded-pill bg-success position-absolute top-0 start-100 translate-middle">{likes}</span>
        </Link>}
        <Link to="/cart" className="header__icon-link position-relative" aria-label={`Корзина: ${safeCartCount}`}>
            <CartIcon/>
            <span className="badge rounded-pill bg-success position-absolute top-0 start-100 translate-middle">{safeCartCount}</span>
        </Link>
        {user && <Link to="/add" className="header__icon-link" aria-label="Добавить товар"><PlusCircle/></Link>}
        {user &&<Link to="/profile" className="header__icon-link" aria-label="Профиль"><ProfileIcon/></Link>}
        {user &&<a href="" onClick={logout} className="header__icon-link" aria-label="Выйти"><BoxArrowLeft/></a>}
        {!user && <a href="" onClick={e => {e.preventDefault(); openPopup(true)}} className="header__icon-link" aria-label="Войти"><BoxArrowInRight/></a>}
    </nav>
</header>
</>
}
