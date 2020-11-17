import React from "react";
import "../../styles/pages/history.scss";
import TransactionsItem from "../../components/history/transactionsItem";
import BillsItem from "../../components/history/billsItem";

import {
  transactionsItemsToday,
  transactionsItemsYesterday,
  transactionsItemsDaysAgo,
  billsItems,
  billsItemsMore,
} from "../../config/data.config";

export default function History() {
  const transactionsItemsTodayData = transactionsItemsToday.map((element) => (
    <TransactionsItem
      title={element.title}
      sum={element.sum}
      image={element.image}
    />
  ));
  const transactionsItemsYesterdayData = transactionsItemsYesterday.map(
    (element) => (
      <TransactionsItem
        title={element.title}
        sum={element.sum}
        image={element.image}
      />
    )
  );
  const transactionsItemsDaysAgoData = transactionsItemsDaysAgo.map(
    (element) => (
      <TransactionsItem
        title={element.title}
        sum={element.sum}
        image={element.image}
      />
    )
  );

  const billsItemData = billsItems.map((element) => (
    <BillsItem
      title={element.title}
      price={element.price}
      image={element.image}
      date={element.date}
    />
  ));
  const billsItemMoreData = billsItemsMore.map((element) => (
    <BillsItem
      title={element.title}
      price={element.price}
      image={element.image}
      date={element.date}
    />
  ));

  return (
    <div className="history">
      <div className="history__transactions">
        <header>Transactions</header>
        <div className="history__transactions-items">
          <div className="history__transactions-items-today">
            <div className="history__transactions-date">Today</div>
            {transactionsItemsTodayData}
          </div>
          <div className="history__transactions-items-yesterday">
            <div className="history__transactions-date">Yesterday</div>
            {transactionsItemsYesterdayData}
          </div>
          <div className="history__transactions-items-days-ago">
            <div className="history__transactions-date">2 days ago</div>
            {transactionsItemsDaysAgoData}
          </div>
        </div>
      </div>

      <div className="history__bills">
        <header>Bills</header>
        <div className="history__bills-items">
          <div className="history__bills-items-month">
            <div className="history__bills-items-date">December</div>
            {billsItemData}
          </div>
          <div className="history__bills-items-month">
            <div className="history__bills-items-date">November</div>
            <div className="scroll-con">{billsItemMoreData}</div>
          </div>
          <div className="history__bills-items-month">
            <div className="history__bills-items-date">October</div>
            {billsItemData}
          </div>
        </div>
      </div>
    </div>
  );
}