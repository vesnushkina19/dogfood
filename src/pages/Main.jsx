import React, {useState} from "react";
import Header from "../components/Header/header";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
// import "bootstrap/dist/css/bootstrap.min.css";
// import data from "../assets/data.json";

export default () => {
    const box = {
        backgroundColor: "orange",
        borderRadius: "20px",
        height: "250px",
        display: "flex",
        alignItems: "center"
    };

    const green = {
        backgroundColor:  "lightGreen",
        height: "250px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0"
    };
    const gold = {
        backgroundColor:  "#E0CC49",
        height: "250px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0"
    }

    function Banner() {
        return <Container >
                    <Row>
                    <Col xs={12} md={12} style={box}>
                    <Col xs={8} md={6}>
                        <h2 style={{color:"white", fontWeight:"900", padding:"10px 50px", fontSize:"44px"}}>Подарок за первый заказ!</h2>
                        <p style={{color:"white", padding:"10px 50px", fontSize:"20px"}}>Лакомства из говядины</p>
                    </Col>
                    <Col xs={4} md={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Figure className="rotate">
                            <Figure.Image src="https://static.insales-cdn.com/images/products/1/5406/409023774/large_25.png">
                            </Figure.Image>
                        </Figure>
                    </Col>
                </Col>
                </Row>
    </Container>
    }


    return <>
        <div className="main__container">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className="main">Крафтовые лакомства для собак</h2>
                        <p style={{fontSize: "16px"}}>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                        <Button className="btn" size="sm" variant="light">Каталог <ChevronRight/></Button>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container style={{padding: "20px 0"}}>
            <Row>
                <Banner/>
                <Col xs={12} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Col xs={10}>
                        <h2>Лакомства</h2>
                    </Col>
                    <Col xs={1}>
                        <Button variant="light"><ChevronLeft/></Button>
                    </Col>
                    <Col xs={1}>
                        <Button variant="light"><ChevronRight/></Button>
                    </Col>
                </Col>
                
                <Col xs={12} md={5} style={green}>
                    <Col xs={6} style={{padding: "20px 0"}}>
                        <h1 style={{color:"white", fontWeight:"900", padding:"10px 20px", fontSize:"32px"}}>Рога северного оленя</h1>
                        <p style={{color:"white", padding:"10px 20px", fontWeight:"700", fontSize:"15px"}}>От 10 до 30 кг.</p>
                    </Col>
                    <Col xs={6} style={{padding: "20px 0"}}>
                        <Figure>
                            <Figure.Image src="https://react-learning.ru/image-compressed/16.jpg" style={{height: "200px"}}/>
                        </Figure> 
                    </Col>
                </Col>
                <Col></Col>
                <Col xs={12} md={6} style={gold}>
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
    </>
}