import React, { useState, useContext } from "react";
import { Context } from "../../App";
import { Form, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Local from "../../Local";

const Modal = ({ isActive, changeActive, setToken, setUser }) => {
  const { api } = useContext(Context);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handler = (e) => {
    e.preventDefault();
    setError("");

    api
      .logIn({ email, password: pwd })
      .then((data) => {
        // ожидаем формат: { token: "...", data: { ...user } }
        if (!data?.token) {
          throw new Error("Токен не получен");
        }

        Local.setItem("shopUser", data.token);
        if (data?.data) {
          Local.setItem("user", data.data, true);
          setUser(data.data);
        }

        setToken(data.token);
        setEmail("");
        setPwd("");
        changeActive(false);
      })
      .catch((err) => {
        console.error("Ошибка авторизации:", err);
        setError("Не удалось войти. Проверь email/пароль.");
      });
  };

  return (
    <div className={isActive ? "popup-box active" : "popup-box"}>
      <div className="popup">
        <XCircle className="popup-close" onClick={() => changeActive(false)} />
        <Form onSubmit={handler}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </Form.Group>

          {error && <div style={{ color: "red", marginTop: "8px" }}>{error}</div>}

          <Button variant="warning" type="submit" style={{ marginTop: "12px" }}>
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Modal;