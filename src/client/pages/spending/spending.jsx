import React from "react";
import "../../styles/pages/spending.scss";
import SpendingInfo from "../../components/spending/spendingInfo";
import SpendingBreakdownInfo from "../../components/spending/spendingBreakdownInfo";
import ExpensesIncome from "../../components/spending/expensesIncome";
import ExpenseChart from "../../components/spending/expenseChart";
import {
  spending,
  expenses,
  income,
  spendingBreakdownInfo,
  spendingInfo
} from "../../config/data.config";

export default function Spending() {
  const spendingBreakdownData = spendingBreakdownInfo.map((element) => (
    <SpendingBreakdownInfo
      title={element.title}
      sum={element.sum}
      icon={element.icon}
      color={element.color}
      lineWidth={element.lineWidth}
    />
  ));
  const spendingInfoDate = spendingInfo.map((element) => (
    <SpendingInfo color={element.color} width={element.width} />
  ));

  return (
    <div className="spending">
      <div className="spending__left">
        <div className="spending__info">
          <header>Spending</header>
          <div className="spending__info-sum">
            {spending} <span>USD</span>
          </div>
          <div className="spending__info-lines">{spendingInfoDate}</div>
        </div>
        <header>Spending breakdown</header>
        {spendingBreakdownData}
      </div>
      <div className="spending__right">
        <ExpensesIncome expenses={expenses} income={income} />
        <ExpenseChart />
      </div>
    </div>
  );
}
