import React, { useContext, useState } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constans";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Home from "../img/home.svg";
import { HandySvg } from "handy-svg";

const NavBar = observer(() => {
  const history = useNavigate();
  const { user } = useContext(Context);

  return (
    <>
      <Navbar className="NavBar">
        <Container>
          <NavLink
            style={{
              textAlign: "center",
              marginLeft: "156px",
              color: "green",
            }}
            to={SHOP_ROUTE}
          >
            <h4>Яблоко раздора</h4>
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto">
              <Button
                variant={"light"}
                onClick={() => history(ADMIN_ROUTE)}
                className="mr-3"
              >
                Войти
              </Button>
              <Button
                variant={"light"}
                onClick={() => history(ADMIN_ROUTE)}
                className="mr-3"
              >
                Администрирование
              </Button>
              <Button
                variant={"light"}
                onClick={() => history(SHOP_ROUTE)}
                className="mr-3"
              >
                <HandySvg src={Home} className="homeBtn" />
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button
                variant={"light"}
                onClick={() => history(LOGIN_ROUTE)}
                className="mr-3"
              >
                Авторизация
              </Button>
              <Button
                variant={"light"}
                onClick={() => user.setIsAuth(true)}
                className="mr-3"
              >
                Админ-панель
              </Button>
              <Button variant={"light"} onClick={() => history(SHOP_ROUTE)}>
                <HandySvg src={Home} className="homeBtn" />
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
      {/* <hr className="hr"/> */}
    </>
  );
});

export default NavBar;
