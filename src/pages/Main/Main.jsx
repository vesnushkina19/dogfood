import React from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import snackDeer from "./img/snackDeer.png";
import snackPig from "./img/snackPig.png";


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

    function Banner() {
        return <Row xs={12} md={12} style={box}>
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
        <Container className="py-4">
            <Banner/>
                <Row className="py-4">
                    <Col xs={12} md={6}>
                        <Row style={green} className="mx-2">
                            <Col xs={5}>
                                <h1 size="md" style={st_h1}>Рога северного оленя</h1>
                                <p style={st_p}>От 10 до 30 кг.</p>
                            </Col>
                            <Col xs={6}>
                                <Figure>
                                    <Figure.Image size="md" src={snackDeer} style={{maxWidth: "85%"}}/>
                                </Figure>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row style={gold} className="mx-2">
                            <Col>
                                <h1 style={st_h1}>Свиные уши</h1>
                                <p style={st_p}>100% натуральные</p>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image src={snackPig} style={{maxWidth: "80%"}}/>
                                </Figure> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
            <Banner/>
        </Container>
    </>
}