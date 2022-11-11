import React from "react";
import { Col, Figure } from "react-bootstrap";
import "./banner.css";


export default () => {
    const box = {
        backgroundColor: "orange",
        borderRadius: "20px",
        height: "250px",
        display: "flex",
        marginBottom: "20px"
    };
    return <Col xs={12} md={12} style={box}>
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
}