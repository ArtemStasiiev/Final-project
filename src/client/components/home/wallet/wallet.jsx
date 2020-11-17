import React, { Component } from "react";
import MasterCard from "../../../../img/mastercard.png";
import "../../../styles/components/home/wallet.scss";

const cardMoney = 16.234;

export default function Wallet() {
  return (
    <div className="wallet">
      <header>Wallet</header>
      <div className="card">
        <div className="card__inner">
          <div className="card__content">
            <div className="card__usd-number">USD</div>
            <div className="card__money-con">${cardMoney.toFixed(3)}</div>
            <div className="card__number-con">
              <div className="card__number">**** 4439</div>
              <img src={MasterCard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
