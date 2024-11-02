import React from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../img/bigStar.png";

export default function ProductPage() {
  const product = "#";
  const desctiption = [
    { id: "данные для характеристик", title: "", desctiption: "" },
  ];
  return (
    <Container className="mt-4">
      <Row>
        {/* Чтобы кололнки не переходили на новую строку, обернем все в Row */}
        <Col md-4>
          <Image width={300} height={300} src="#" />
        </Col>
        <Col md-4>
          <Row className="d-flex flex-column align-items-center">
            <h2>{product.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 60,
              }}
            >
              {product.rating}
            </div>
          </Row>
        </Col>
        <Col md-4>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              height: 300,
              fontSize: 32,
              width: 300,
              border: "5px solid lightreay",
            }}
          >
            <h3> От: {product.price} руб.</h3>
            <Button variant={"outline-dark"}>Купить</Button>
          </Card>
        </Col>
        <Col md-4></Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {desctiption.map((info) => (
          <Row key={desctiption.id}>
            <h1>Описание</h1>
            {info.title} : {info.desctiption}
          </Row>
        ))}
      </Row>
    </Container>
  );
}
