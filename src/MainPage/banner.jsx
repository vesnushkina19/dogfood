import React from "react";
import { Col, Figure } from "react-bootstrap";


export default () => {
    const box = {
        backgroundColor: "orange",
        borderRadius: "20px",
        height: "250px",
        zIndex: "333",
        display: "flex"
    };
    return <Col xs={12} md={12} style={box}>
    <Col xs={8} md={6}>
        <h2 style={{color:"white", fontWeight:"900", padding:"20px 50px", fontSize:"44px"}}>Подаророк за первый заказ!</h2>
        <p style={{color:"white", padding:"20px 50px", fontSize:"20px"}}>Лакомства из говядины</p>
    </Col>
    <Col xs={4} md={6}>
        <Figure style={{height:"250px", width: "250px", rotate:"30deg"}}>
            <Figure.Image src="https://static.insales-cdn.com/images/products/1/5406/409023774/large_25.png">
            </Figure.Image>
        </Figure>
    </Col>
</Col>
}