import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constans";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container //window.innerHeight - 54 (размер окна минус высота navBar )
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email:" />
          <Form.Control className="mt-3" placeholder="Введите пароль:" />
          <Row className="d-flex justify-content-between mt-2">
            {isLogin ? (
              <div>
                Нет аккуунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink>
              </div>
            ) : (
              <div>
                Есть аккуунт?
                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button variant={"outline-success"}>
              {isLogin ? "Войти" : "Зарегестрироваться"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
