import React, {useState} from "react";
//import Catalog from "./pages/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
import Main from "./MainPage/main";

const App = () => {
    // const st = {
    //     height: "70px",
    //     backgroundColor: "yellow",
    //     border: "1px solid salmon"
    // }
    // return <Container style={{height: "900px", backgroundColor: "salmon"}}>
    //         <Row>
    //             <Col md={6} style={st}/>
    //             <Col md={3} xs={6} style={st}/>
    //             <Col md={3} xs={6} style={st}/>
    //             <Col xs={3} style={st}/>
    //             <Col xs={3} style={st}/>
    //             <Col xs={3} style={st}/>
    //             <Col xs={3} style={st}/>
    //             <Col xs={12} style={st}/>
    //         </Row>
    //     </Container>
    return <Main/>
}

export default App;