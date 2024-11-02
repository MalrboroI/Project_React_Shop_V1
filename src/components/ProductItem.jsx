import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../img/star.png";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/constans";

const ProductItem = ({ product }) => {
  const history = useNavigate(); // для динамического перемещения по странице с помощью onClick={() => history(PRODUCT_ROUTE (из routes.jsx) + '/' + product.id)}
  return (
    <Col
      md={3}
      className={"mt-4"}
      onClick={() => history(PRODUCT_ROUTE + `/` + product.id)}>
      <Card style={{ width: 150, cersor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src="#" />
        <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
          <div>Продукт</div>
          <div className="d-flex align-items-center">
            <div className="d-flex">{product.rating}</div>
            <Image width={17} height={17} src={star} />
          </div>
        </div>
        <div>{product.name}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;
