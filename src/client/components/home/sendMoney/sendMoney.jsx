import React, { useState } from "react";
import "../../../styles/components/home/sendMoney.scss";
import SendMoneyPhotos from "./sendMoneyItems/sendMoneyPhotos";
import RecentOperations from "./recentOperations/recentOperations";
import { sendMoneyPhotos, recentOperations } from "../../../config/data.config";

export default function SendMoney() {
  const sendMoneyPhoto = sendMoneyPhotos.map((element) => (
    <SendMoneyPhotos photo={element.image} />
  ));

  const recentOperationsData = recentOperations.map((element) => (
    <RecentOperations
      title={element.title}
      price={element.price}
      image={element.image}
    />
  ));

  return (
    <div className="send-money">
      <header>Send money</header>
      <div className="send-money__inner">
        <div className="send-money__recent">Recent</div>
        <div className="contacts-con">
          <button className="plus-btn">+</button>
          <div className="img-con">{sendMoneyPhoto}</div>
        </div>
        <header>Recent operations</header>
        <div className="recent-operations__today">Today</div>
        {recentOperationsData}
      </div>
    </div>
  );
}