import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <ListGroup>
      {product.types.map((type) => (
        <ListGroup.Item
        style={{cursor:'pointer'}} // при наведении мыши
          active={type.id === product.selectType.id} // если id типа равен с id в ProductStore тогда выделяем элемент
          onClick={() => product.setSelectType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
