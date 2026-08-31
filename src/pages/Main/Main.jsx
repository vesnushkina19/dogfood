import React from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import snackDeer from "./img/snackDeer.png";
import snackPig from "./img/snackPig.png";
import "./style.css";

const giftBoxImage = "https://images.unsplash.com/photo-1743652902034-6b07043b2f0f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200";

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

    function Banner() {
        return <Row xs={12} md={12} style={box}>
                    <Col xs={8} md={6} className="promo-card__content">
                        <h1 size="md" className="promo-card__title">Подарок за первый заказ!</h1>
                        <p className="promo-card__text">Лакомства из говядины</p>
                    </Col>
                    <Col xs={4} md={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Figure className="rotate">
                            <Figure.Image
                                src={giftBoxImage}
                                alt="Собака с подарочным боксом лакомств"
                                style={{maxWidth: "85%", maxHeight: "210px", objectFit: "cover", borderRadius: "16px"}}
                            />
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
                            <Col xs={6} className="promo-card__content">
                                <h1 size="md" className="promo-card__title">Рога северного оленя</h1>
                                <p className="promo-card__text">От 10 до 30 кг.</p>
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
                            <Col className="promo-card__content">
                                <h1 className="promo-card__title">Свиные уши</h1>
                                <p className="promo-card__text">100% натуральные</p>
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
