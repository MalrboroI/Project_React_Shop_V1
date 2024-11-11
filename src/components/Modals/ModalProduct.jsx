import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index.jsx";

export default function ModalProduct({ show, onHide }) {
  const { product } = useContext(Context); //Хук useContext, принимаю-й ф-ю от index.jsx, и продукт из ProductStore
  const [info, setInfo] = useState([]);
  // передаем два пропса, show когда виден эл-т или нет и onHide скрывает мода-е окно
  //Создаем функцию добавления описания через addInfo
  const addInfo = () => {
    // где мы передаем ф-ю с изменением состояния. В массив вносим старый массив информации (...info). и создаем в нем новый элемент, который принимает объекты (также добавляем ф=ю Date.now() для создания ун-х цифр, которые исп-ем для id)
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  // пробегаемся по info.filter пробегаемся и ищем похожие номера эл-в с ном-м пар-ра
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип продукта
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className={"mt-3"}>
            {/* делаем элемент для выпадающего окна выбора тов-ра */}
            <Dropdown.Toggle>Выбрать тип продукта</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        {/* Можно оставить одну форму*/}

        <Form>
          <Dropdown className={"mt-3"}>
            {/* делаем элемент для выпадающего окна выбора тов-ра */}
            <Dropdown.Toggle>Выбрать бренд продукта</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))} 
            </Dropdown.Menu>
          </Dropdown>
          {/* Form.Comtrol это инпут// а hr это раздел-я линия*/}
          <Form.Control
            className="mt-3"
            placeholder="Введите название продукта"
          ></Form.Control>
          <hr />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость продукта"
            type="number"
          ></Form.Control>
          <hr />
          <Form.Control className="mt-3" type="file"></Form.Control>

          <Button className="mt-3" variant={"outline-dark"} onClick={addInfo}>
            Добавить описание
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-3">
              {/* создадим колонку, при вызове ф-и info// В key ук-м вызов Date.now */}
              <Col md={4}>
                <Form.Control placeholder="Введите название продукта"></Form.Control>
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Введите описание продукта"></Form.Control>
              </Col>

              <Col md={4}>
                {/* передаем при нажа-и значения i.number т.е key */}
                <Button
                  className="d-flex "
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
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
