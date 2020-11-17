import React from "react";
import "../../../styles/components/home/spendingBreakdown.scss";

export default function SpendingBreakdown(props) {
  return (
    <div className="spending-breakdown__items">
      <div className="spending-breakdown__type">{props.title}</div>
      <div className="spending-breakdown__price">
        ${props.ammount}
        <div className="spending-breakdown__line-background">
          <div
            className="spending-breakdown__line"
            style={{ width: `${props.lineWidth}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
