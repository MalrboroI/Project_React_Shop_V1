import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../../index.jsx";

export default function ModalBrand({ show, onHide }) {
  const { product } = useContext(Context);
  // передаем два пропса, show когда виден эл-т или нет и onHide скрывает мода-е окно
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип продукта
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Form.Comtrol это инпут*/}
          {/* <Form.Control playceholder={"Введите название типа"}></Form.Control> */}
          <Dropdown>
            {" "}
            {/* делаем элемент для выпадающего окна выбора тов-ра */}
            <Dropdown.Toggle>Выбрать бренд продукта</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
