import React from "react";
import "../../styles/components/history/billsItem.scss";

export default function BillsItem(props) {
  return (
    <div className="bills__item">
      <div className="bills__item-left">
        <img src={require(`../../../img/${props.image}`)} alt="" />
        <div className="bills__item-title-date">
          {props.title}
          <div className="bills__item-date">{props.date}</div>
        </div>
      </div>
      <div className="bills__item-right">- ${props.price}</div>
    </div>
  );
}
