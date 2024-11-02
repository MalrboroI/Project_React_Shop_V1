import React, { useContext } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, SHOP_ROUTE } from "../utils/constans";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const history = useNavigate();
  const { user } = useContext(Context);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{ color: "green" }} to={SHOP_ROUTE}>
            Яблоко раздора
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto">
              <Button
                variant={"outline-light"}
                onClick={() => history(ADMIN_ROUTE)}
                className="mr-3"
              >
                Войти
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => history()}
                className="mr-3"
              >
                Домой
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => history(ADMIN_ROUTE)}
              >
                Администрирование
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
                className="mr-3"
              >
                Авторизация
              </Button>
              <Button variant={"outline-light"} onClick={() => history()}>
                Домой
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
