import React from "react";
import { Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import MainSideBar from "../components/MainSideBar";

export default function Shop() {
  return (
    <>
     <MainSideBar />
      <Container>
        <Row className="mt-3">
          <Col md={3}>{/* <TypeBar /> */}</Col>
          <Col md={9}>
            {/* <BrandBar /> */}
            <ProductList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
