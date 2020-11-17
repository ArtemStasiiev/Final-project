import React from "react";
import "../../styles/pages/transfers.scss";
import SendMoney from "../../components/transfers/sendMoney/sendMoney";
import TransferField from "../../components/transfers/transfer/transferField";
import Payments from "../../components/transfers/payments/payments";

export default function Transfer() {
  return (
    <div className="Transfer">
      <div className="Transfer__Left-Con">
        <SendMoney />
      </div>
      <div className="Transfer__Center-Con">
        <TransferField />
      </div>
      <div className="Transfer__Right-Con">
        <Payments />
      </div>
    </div>
  );
}
