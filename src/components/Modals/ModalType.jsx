import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

export default function ModalType({ show, onHide }) {
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
          <Form.Control playceholder={"Введите название типа"}></Form.Control>
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
