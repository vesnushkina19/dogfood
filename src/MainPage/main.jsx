import React, {useState} from "react";
import { Container, Row, Col, ButtonGroup, Button, Figure, Table } from "react-bootstrap";
import Header from "./Header/header";
import Footer from "../components/Footer/footer";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Banner from "./banner.jsx";

import data from "../assets/data.json";


export default () => {
    let p = data[0];
    let p1 = data[1];
    let p2 = data[2];
    return <div className="wrapper">
    <Header/>
        <Container style={{height: "1000px", paddingTop: "20px"}}>
            <Row>
                <Banner/>
                <Col xs={10} md={10} style={{paddingTop:"10px"}}>
                    <h2>Лакомства</h2>
                </Col>
                <Col xs={2} md={2} style={{paddingTop:"10px"}}>
                    <ButtonGroup>
                        <Button variant="light"><ChevronLeft/></Button>
                        <Button variant="none"/>
                        <Button variant="light"><ChevronRight/></Button>
                    </ButtonGroup>
                </Col>
                <Col xs={6} md={4} style={{padding:"20px"}}>
                <Figure style={{borderRadius: "20px"}}>
                    <Figure.Image src={p.picture}/>
                </Figure>
                <div style={{fontWeight: "900"}}>{p.price} ₽</div>    
                <h1 style={{fontSize: "18px"}}>{p.name}</h1>
                <Button size="sm" variant="warning">В корзину</Button>
                </Col>
                <Col xs={6} md={4} style={{padding:"20px"}}>
                <Figure>
                    <Figure.Image src={p1.picture}/>
                </Figure>
                <div style={{fontWeight: "900"}}>{p1.price} ₽</div>   
                <h1 style={{fontSize: "18px"}}>{p1.name}</h1>
                <Button size="sm" variant="warning">В корзину</Button>
                </Col>
                <Col xs={0} md={4} style={{padding:"20px"}}>
                <Figure>
                    <Figure.Image src={p2.picture}/>
                </Figure>
                <div style={{fontWeight: "900"}}>{p2.price} ₽</div>     
                <h1 style={{fontSize: "18px"}}>{p2.name}</h1>
                <Button size="sm" variant="warning">В корзину</Button>
                </Col>
                <Banner/>
            </Row>
        </Container>
    <Footer/>
</div>
}