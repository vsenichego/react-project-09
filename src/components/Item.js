import React, { useState } from "react";
import styled from "styled-components";
import ButtonItem from "./ButtonItem";

const WrapperDiv = styled.div`
  .item-info {
    margin-left: 10px;
  }

  .item-quantity {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 16px;
  }
`;


export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <WrapperDiv>
      <img src={props.info.image} alt="" />
      <div className="item-info">
        <h2>{props.info.name}</h2>
        <p>{props.info.desc}</p>
      </div>
      <div className="item-quantity">
        <ButtonItem
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </ButtonItem>
        <h3>{total ? total : ""}</h3>
        <ButtonItem onClick={handleAddClick}>
          +
        </ButtonItem>
      </div>
    </WrapperDiv>
  );
}
