import React, {useState} from "react";
import Logo from "../Logo/logo";
import "./header.css";
import {ReactComponent as FavIcon} from "./images/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./images/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./images/ic-profile.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";


export default ({products, update}) => {
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
    return <>
    <header>
        <div className="search">
            <Logo/>
            <input type="search" value={text} onChange={handler}/>
            <nav>
                <a href=""><FavIcon/></a>
                <a href=""><CartIcon/></a>
                <a href=""><ProfileIcon/></a>
            </nav>
        </div>
        <Container>
            <Row>
                <Col xs={4}>
                    <h2>Крафтовые лакомства для собак</h2>
                    <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                    <Button className="btn" size="sm" variant="light">Каталог <ChevronRight/></Button>
                </Col>
            </Row>
        </Container> 
    </header>
</>
}

