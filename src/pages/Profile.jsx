import React from "react";
import {Container, Row, Col, Figure, Button} from "react-bootstrap";
import { clearLocalRegistrations, isAdmin } from "../utils/auth";

export default ({user, setToken, setUser}) => {
    const userIsAdmin = isAdmin(user);

    const clearRegistrations = () => {
        const confirmed = window.confirm("Очистить все локальные регистрации?");

        if (!confirmed) return;

        const cleared = clearLocalRegistrations(user);

        if (!cleared) return;

        setToken("");
        setUser({});
    };

    return <Container>
        {user.name && <Row>
            <Col md={6}>
                <h1>Профиль</h1>
                <h2>{user.name}</h2>
                <a href={`mailto:${user.email}`}>{user.email}</a>
                <p>{user.about}</p>
                {userIsAdmin && (
                    <div className="mt-4">
                        <h3>Админ</h3>
                        <Button variant="outline-danger" onClick={clearRegistrations}>
                            Очистить локальные регистрации
                        </Button>
                    </div>
                )}
            </Col>
            <Col md={6}>
                <Figure>
                    <Figure.Image src={user.avatar}/>
                </Figure>
            </Col>
        </Row>} 
    </Container>
}
