import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ModalBrand from "../components/Modals/ModalBrand";
import ModalProduct from "../components/Modals/ModalProduct";
import ModalType from "../components/Modals/ModalType";

export default function Admin() {
  const [brandVisible, setBrandVisible] = useState(false); // создаем отобр-е состояния. По умолчанию false (useState принимает два аргумента с пом-ю диструк-и)
  const [productVisible, setProductVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      {/* при нажатии на кнопку модальное окно переходит в состояни true */}
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setTypeVisible(true)}
        >
        Добавить тип
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setProductVisible(true)}
      >
        Добавить продукт
      </Button>
      {/* передаем значения при нажатии на открытие модалки */}
      <ModalBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <ModalProduct show={productVisible} onHide={() => setProductVisible(false)}/>
      <ModalType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
}
