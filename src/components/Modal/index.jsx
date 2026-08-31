import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Local from "../../Local";
import { getSavedUsers, normalizeEmail, USERS_STORAGE_KEY } from "../../utils/auth";

const Modal = ({ isActive, changeActive, setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = mode === "login";

  const resetForm = () => {
    setEmail("");
    setPwd("");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    changeActive(false);
  };

  const handler = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const normalizedEmail = normalizeEmail(email);
    const users = getSavedUsers();

    try {
      if (isLogin) {
        const savedUser = users.find(
          (item) => item.email === normalizedEmail && item.password === pwd
        );

        if (!savedUser) {
          setError("Не удалось войти. Проверь email/пароль.");
          return;
        }

        const token = `local-token-${savedUser._id}`;
        const user = {
          _id: savedUser._id,
          email: savedUser.email,
          name: savedUser.name,
        };

        Local.setItem("shopUser", token);
        Local.setItem("user", user, true);
        setToken(token);
        setUser(user);
        resetForm();
        changeActive(false);
        return;
      }

      const emailExists = users.some((item) => item.email === normalizedEmail);

      if (emailExists) {
        setError("Такой email уже есть локально. Можно войти с этим email.");
        return;
      }

      const newUser = {
        _id: `local-${Date.now()}`,
        email: normalizedEmail,
        password: pwd,
        name: normalizedEmail.split("@")[0],
      };
      const user = {
        _id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      };
      const token = `local-token-${newUser._id}`;

      Local.setItem(USERS_STORAGE_KEY, [...users, newUser], true);
      Local.setItem("shopUser", token);
      Local.setItem("user", user, true);
      setToken(token);
      setUser(user);
      resetForm();
      changeActive(false);
    } catch (err) {
      console.error("Ошибка локальной авторизации:", err);
      setError(
        isLogin
          ? "Не удалось войти. Проверь email/пароль."
          : "Не удалось зарегистрироваться. Попробуй еще раз."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={isActive ? "popup-box active" : "popup-box"}>
      <div className="popup">
        <XCircle className="popup-close" onClick={handleClose} />
        <h2 className="popup-title">{isLogin ? "Вход" : "Регистрация"}</h2>
        <div className="popup-tabs">
          <button
            type="button"
            className={isLogin ? "popup-tab active" : "popup-tab"}
            onClick={() => {
              setMode("login");
              setError("");
            }}
          >
            Вход
          </button>
          <button
            type="button"
            className={!isLogin ? "popup-tab active" : "popup-tab"}
            onClick={() => {
              setMode("register");
              setError("");
            }}
          >
            Регистрация
          </button>
        </div>
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
              minLength={6}
              required
            />
          </Form.Group>

          {error && <div className="popup-error">{error}</div>}

          <Button variant="warning" type="submit" disabled={isLoading}>
            {isLoading ? "Подождите..." : isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Modal;
