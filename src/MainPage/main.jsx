import React, {useState} from "react";
import { Container, Row, Col, ButtonGroup, Button, Figure } from "react-bootstrap";
import Header from "./Header/header";
import Footer from "../components/Footer/footer";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Banner from "./banner.jsx";
// import Card from "../components/Card";
import Catalog from "../pages/Catalog";

import data from "../assets/data.json";


export default () => {
    let p = data[0];
    let p1 = data[1];
    let p2 = data[2];

    return <div className="wrapper">
    <Header/>
        <Container style={{paddingTop: "20px"}}>
            <Row>
                <Banner/>
                <Col xs={11} md={11} style={{paddingTop:"10px"}}>
                    <h2>Лакомства</h2>
                </Col>
                <Col xs={1} md={1} style={{paddingTop:"10px"}}>
                    <ButtonGroup>
                        <Button variant="light"><ChevronLeft/></Button>
                        <Button variant="none"/>
                        <Button variant="light"><ChevronRight/></Button>
                    </ButtonGroup>
                </Col>
                <Container>
                    <Row>
                        <Col xs={12}>
                            {/* <Catalog/> */}
                        </Col>
                    </Row>
                </Container>
                {/* <Col xs={6} md={4} style={{padding:"20px"}}>
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
                <Col xs={6} md={4} style={{padding:"20px"}}>
                    <Figure>
                        <Figure.Image src={p2.picture}/>
                    </Figure>
                    <div style={{fontWeight: "900"}}>{p2.price} ₽</div>     
                    <h1 style={{fontSize: "18px"}}>{p2.name}</h1>
                    <Button size="sm" variant="warning">В корзину</Button>
                </Col> */}
                <Col xs={12} md={5} style={{backgroundColor:  "lightGreen", height: "250px",borderRadius: "20px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Col xs={6}>
                        <h1 style={{color:"white", fontWeight:"900", padding:"10px 20px", fontSize:"34px"}}>Рога северного оленя</h1>
                        <p style={{color:"white", padding:"10px 20px", fontWeight:"700", fontSize:"15px"}}>От 10 до 30 кг.</p>
                    </Col>
                    <Col xs={6}>
                        <Figure>
                            <Figure.Image src="https://react-learning.ru/image-compressed/16.jpg" style={{height: "200px"}}/>
                        </Figure> 
                    </Col>
                </Col>
                <Col></Col>
                <Col xs={12} md={6} style={{backgroundColor:  "#E0CC49", height: "250px",borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px"}}>
                    <Col>
                        <h1 style={{color:"white", fontWeight:"900", padding:"10px 20px", fontSize:"34px"}}>Свиные уши</h1>
                        <p style={{color:"white", padding:"10px 20px", fontWeight:"700", fontSize:"15px"}}>100% натуральные</p>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image src="https://react-learning.ru/image-compressed/10.jpg" style={{height: "200px"}}/>
                        </Figure> 
                    </Col>
                </Col>
                <Banner/>
            </Row>
        </Container>
    <Footer/>
</div>
}