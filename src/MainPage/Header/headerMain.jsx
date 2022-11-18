import React, {useState} from "react";
import Logo from "../Logo/logo";
import "./headerMain.css";
import {BoxArrowInRight, BoxArrowLeft} from "react-bootstrap-icons";
import {ReactComponent as FavIcon} from "./images/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./images/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./images/ic-profile.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";


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
        <div className="search">
            <Logo/>
            <input type="search" value={text} onChange={handler} style={{width: "700px"}}/>
            <nav>
            {user && <a href=""><FavIcon/></a>}
            {user && <a href=""><CartIcon/></a>}
            {user &&<a href=""><ProfileIcon/></a>}
            {user &&<a href="" onClick={logout} style={{fontSize: "1.6rem"}}><BoxArrowLeft/></a>}
            {!user && <a href="" onClick={e => {e.preventDefault(); openPopup(true)}} style={{fontSize: "1.6rem"}}><BoxArrowInRight/></a>}
        </nav>
        </div>
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <h2>Крафтовые лакомства для собак</h2>
                    <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                    <Button className="btn" size="sm" variant="light">Каталог <ChevronRight/></Button>
                </Col>
            </Row>
        </Container> 
    </header>
</>
}

