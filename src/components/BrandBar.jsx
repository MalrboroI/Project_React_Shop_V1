import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { product } = useContext(Context); // product это наш гетер (массив об-в)
  return (
    <Row className="d-flex">
      {product.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          border={brand.id === product.selectBrand.id ? "danger" : "light"}
          onClick={() => product.setSelectBrand(brand)}
          key={brand.id}
          className="p-3"
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
