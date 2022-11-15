import React from "react";
import {Link} from "react-router-dom";
import logo from "./img/logo.svg";

export default () => {
    return <Link className="logo" to="/">
        <img src={logo} alt="Dog Food"/>
    </Link>
}