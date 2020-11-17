import React from "react";
import "../../styles/components/history/transactionsItem.scss";

export default function TransactionsItem(props) {
  return (
    <div className="transactions__item">
      <div className="transactions__item-left">
        <img src={require(`../../../img/${props.image}`)} alt="" />
        <div>{props.title}</div>
      </div>
      <div className="transactions__item-right">{props.sum}</div>
    </div>
  );
}
