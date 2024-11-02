import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {
  const { product } = useContext(Context); // product это наш гетер (массив об-в)// это productStore, чтобы с ним взаимодействовать
  return (
    <Row className="d-flex ">
      {product.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Row>
  );
});

export default ProductList;
