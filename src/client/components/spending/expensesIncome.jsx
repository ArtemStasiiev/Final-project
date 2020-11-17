import React from "react";
import "../../styles/components/spending/expensesIncome.scss";

export default function ExpensesIncomes(props) {
  return (
    <div className="expenses-income">
      <div className="expenses">
        <header>Expenses</header>
        <div className="expenses__sum">
          {props.expenses} <span>USD</span>
        </div>
      </div>
      <div className="income">
        <header>Income</header>
        <div className="income__sum">
          {props.income} <span>USD</span>
        </div>
      </div>
    </div>
  );
}
