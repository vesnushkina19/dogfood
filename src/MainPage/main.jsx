import React, {useState} from "react";
import { Container, Row, Col, ButtonGroup, Button, Figure } from "react-bootstrap";
import Header from "./Header/header";
import Footer from "../components/Footer/footer";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Banner from "./banner.jsx";

import data from "../assets/data.json";


export default () => {
    let p = data[0];
    // const [cnt, setCnt] = useState(0);
    return <div className="wrapper">
    <Header/>
        <Container style={{height: "800px", paddingTop: "20px"}}>
            <Row>
                <Banner/>
                <Col xs={10} md={10} style={{paddingTop:"10px"}}>
                    <h2>Лакомства</h2>
                </Col>
                <Col xs={2} md={2} style={{paddingTop:"10px"}}>
                    <ButtonGroup>
                        <Button variant="light"><ChevronLeft/></Button>
                        <Button variant="light"><ChevronRight/></Button>
                    </ButtonGroup>
                </Col>
                <Col xs={6} md={4}>
                    
                </Col>
                <Col xs={6} md={4}>

                </Col>
                <Col xs={0} md={4}></Col>
                <Col xs={12} md={12}></Col>
            </Row>
        </Container>
    <Footer/>
</div>
}