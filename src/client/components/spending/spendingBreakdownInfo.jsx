import React from "react";
import "../../styles/components/spending/spendingBreakdownInfo.scss";

export default function SpendingBreakdownInfo(props) {
  return (
    <div className="spending-breakdown__item">
      <div className="spending-breakdown__left">
        <div className="spending-breakdown__icon">
          <div style={{ backgroundColor: `${props.color}`, dispaly: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <FontAwesomeIcon icon={props.icon} /> */}
            <img src={require(`../../../img/${props.icon}`)} style={{width: '25px', height: '25px', objectFit: 'cover'}} alt="" />
          </div>
        </div>
        <div className="spending-breakdown__name">
          {props.title}
          <div
            style={{
              backgroundColor: `${props.color}`,
              width: `${props.lineWidth}`,
            }}
          ></div>
        </div>
      </div>
      <div>
        {props.sum} <span>USD</span>{" "}
      </div>
    </div>
  );
}