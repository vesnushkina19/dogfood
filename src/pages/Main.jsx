import React, {useState} from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
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
        
        // width: "calc(50% - 20px)"
    };
    const gold = {
        backgroundColor:  "#E0CC49",
        height: "250px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const st_h1 = {
        color:"white",
        fontWeight:"900",
        padding:"10px 20px",
        fontSize:"30px",
    }

    const st_p = {
        color:"white",
         padding:"10px 50px",
        fontSize:"20px"
    }

    const st_pic = {
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    function Banner() {
        return <Row xs={12} md={12} style={box} className="g-4">
                    <Col xs={8} md={6}>
                        <h1 size="md" style={st_h1}>Подарок за первый заказ!</h1>
                        <p style={st_p}>Лакомства из говядины</p>
                    </Col>
                    <Col xs={4} md={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Figure className="rotate">
                            <Figure.Image src="https://static.insales-cdn.com/images/products/1/5406/409023774/large_25.png">
                            </Figure.Image>
                        </Figure>
                    </Col>
                </Row>
                
    }


    return <>
        <div className="main__container">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className="main">Крафтовые лакомства для собак</h2>
                        <p style={{fontSize: "16px"}}>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                        <Link to="/catalog"><Button className="btn" size="sm" variant="light">Каталог <ChevronRight/></Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className="">
            <Row  className="gx-5 p-4 g-4">
                <Banner/>
                        <Col xs={12} md={6}>
                            <Row style={green}>
                                <Col xs={6}>
                                    <h1 size="md" style={st_h1}>Рога северного оленя</h1>
                                    <p style={st_p}>От 10 до 30 кг.</p>
                                </Col>
                                <Col xs={6}>
                                    <Figure>
                                        <Figure.Image size="md" src="https://react-learning.ru/image-compressed/16.jpg"/>
                                    </Figure>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row style={gold}>
                                <Col>
                                    <h1 style={st_h1}>Свиные уши</h1>
                                    <p style={st_p}>100% натуральные</p>
                                </Col>
                                <Col>
                                    <Figure>
                                        <Figure.Image src="https://react-learning.ru/image-compressed/10.jpg" style={{height: "150px"}}/>
                                    </Figure> 
                                </Col>
                            </Row>
                        </Col>
                <Banner/>
            </Row>
        </Container>
    </>
}