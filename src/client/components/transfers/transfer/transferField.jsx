import React, { useState } from "react";
import "../../../styles/components/transfer/transferField.scss";
import {
  faCreditCard,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DebitCard from "../../../../img/blue_card.png";
import NumberFormat from "react-number-format";

export default function TransferField() {
  const [cardNumber, setCardNumber] = useState("");
  const [sum, setSum] = useState(0);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSumChange = (event) => {
    setSum(event.target.value);
  };

  const clearInputValues = (event) => {
    setCardNumber("");
    setSum(0);
  };
  return (
    <div className="transfer">
      <header>Transfer</header>
      <p className="transfer__input-header">From</p>
      <div className="transfer__my-card-con">
        <div className="transfer__my-card">
          <div className="transfer__my-card-info">
            <p>Mastercard **** 4439</p>
            <p>$16.234</p>
          </div>
          <img src={DebitCard} alt="" />
        </div>
      </div>
      <p className="transfer__input-header">To</p>
      <div className="transfer__input-form-con">
        <form className="transfer__input-form">
          <NumberFormat
            type="text"
            name="cardNumber"
            format="#### #### #### ####"
            mask=" "
            autoComplete="off"
            required
            onChange={handleCardNumberChange}
            value={cardNumber}
            className="transfer__input-first"
          />
          <label htmlFor="">
            <span>Card number</span>
          </label>
        </form>
      </div>
      <p className="transfer__input-header">Amount, USD</p>
      <form className="transfer__input-form">
        <NumberFormat
          type="text"
          name="cardNumber"
          thousandSeparator={true}
          prefix={"$"}
          autoComplete="off"
          required
          onChange={handleSumChange}
          value={sum}
          className="transfer__input-second"
        />
      </form>
      <div className="transfer__button-con">
        <p>the commission will be calculated automatically</p>
        <button onClick={() => clearInputValues()}>Transfer money</button>
      </div>
      <div className="transfer__from-card">
        <div className="transfer__icon-con">
          <FontAwesomeIcon icon={faCreditCard} className="transfer__icon" />
        </div>
        <p>From card to card</p>
      </div>
      <div className="transfer__transfers">
        <div className="transfer__icon-con">
          <FontAwesomeIcon icon={faMoneyCheckAlt} className="transfer__icon" />
        </div>
        <p>SWIFT transfers</p>
      </div>
    </div>
  );
}
