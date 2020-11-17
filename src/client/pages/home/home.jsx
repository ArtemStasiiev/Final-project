import React, { Component } from "react";
import "../../styles/pages/home.scss";
import Wallet from "../../components/home/wallet/wallet";
import SendMoney from "../../components/home/sendMoney/sendMoney";
import UpcomingBills from "../../components/home/upcomingBills/upcomingBills";
import SpendingBreakdown from "../../components/home/spendingBreakdown/spendingBreakdown";
import SafeToSpend from "../../components/home/safeToSpend/safeToSpend";
import ExpenseIncomeChart from "../../components/home/expenseIncomeChart/expenseIncomeChart";
import MyGoals from "../../components/home/myGoals/myGoals";
import {
  upcomingBills,
  spendingBreakdown,
  monthNames,
} from "../../config/data.config";

export default function Home() {
  const upcomingBillsData = upcomingBills.map((element) => (
    <UpcomingBills
      title={element.title}
      price={element.price}
      image={element.image}
      id={element.id}
      date={element.date}
    />
  ));

  const spendingBreakdownData = spendingBreakdown.map((element) => (
    <SpendingBreakdown
      title={element.title}
      lineWidth={element.lineWidth}
      ammount={element.sum}
    />
  ));

  return (
    <div className="home">
      <div className="home__left">
        <Wallet />
        <SendMoney />
      </div>

      <div className="home__center">
        <SafeToSpend />
        <ExpenseIncomeChart />
        <MyGoals />
      </div>

      <div className="home__right">
        <div className="home__upcoming-bills">
          <header>Upcoming Bills</header>
          <div className="home__upcoming-bills-month">
            {monthNames[new Date().getMonth()]}
          </div>
          {upcomingBillsData}
          <header></header>
          <div className="home__upcoming-bills-month">
            {monthNames[new Date().getMonth() + 1]}
          </div>
          {upcomingBillsData}
        </div>
        <div className="home__spending-breakdown">
          <header>Spending breakdown</header>
          {spendingBreakdownData}
        </div>
      </div>
    </div>
  );
}