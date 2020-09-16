import React, { Component } from 'react';
import '../../styles/pages/spending.scss';
import SpendingInfo from '../../components/spending/spendingInfo';
import SpendingBreakdownInfo from '../../components/spending/spendingBreakdownInfo';
import ExpensesIncome from '../../components/spending/expensesIncome';
import ExpenseChart from '../../components/spending/expenseChart';

import { faShoppingCart, faMoneyBill, faBus, faDollarSign, faGamepad, faTshirt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
// import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
// import { faBus } from "@fortawesome/free-solid-svg-icons";
// import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
// import { faGamepad } from "@fortawesome/free-solid-svg-icons";
// import { faTshirt } from "@fortawesome/free-solid-svg-icons";
// import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

// class Spending extends Component {

//     state = {
//         spending: 1.948,
//         spendingBreakdown: [
//             { title: 'Grocery', color: '#13FFDD', sum: 766, icon: faShoppingCart },
//             { title: 'Bills', color: '#1FFF71', sum: 456, icon: faMoneyBill },
//             { title: 'Transport', color: '#FFCF0F', sum: 255, icon: faBus },
//             { title: 'Subscriptions', color: '#F57200', sum: 181, icon: faDollarSign },
//             { title: 'Entertainment', color: '#BB00E6', sum: 134, icon: faGamepad },
//             { title: 'Apparel', color: '#0082E6', sum: 96, icon: faTshirt },
//             { title: 'Other', color: '#6F8560', sum: 54, icon: faEllipsisH }
//         ],
//         expenses: 1.948,
//         income: 2.543
//     }

//     render() {

//         const spendingBreakdown = this.state.spendingBreakdown.map(element =>
//             <SpendingBreakdownInfo
//                 title={element.title}
//                 sum={element.sum}
//                 icon={element.icon}
//                 color={element.color} />);

//         return (
//             <div className="Spending">
//                 <div className="Spending__Left-Con">
//                     <SpendingInfo
//                         spending={this.state.spending} />
//                     <header>Spending breakdown</header>

//                     <div className="Spending-Breakdown-Info">
//                         {spendingBreakdown}
//                     </div>
//                 </div>
//                 <div className="Spending__Right-Con">
//                     <ExpensesIncome
//                         expenses={this.state.expenses}
//                         income={this.state.income} />
//                     <ExpenseChart />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Spending;

export default function Spending() {

    const spending = 1.948;
    const spendingBreakdown = [
        { title: 'Grocery', color: '#13FFDD', sum: 766, icon: faShoppingCart },
        { title: 'Bills', color: '#1FFF71', sum: 456, icon: faMoneyBill },
        { title: 'Transport', color: '#FFCF0F', sum: 255, icon: faBus },
        { title: 'Subscriptions', color: '#F57200', sum: 181, icon: faDollarSign },
        { title: 'Entertainment', color: '#BB00E6', sum: 134, icon: faGamepad },
        { title: 'Apparel', color: '#0082E6', sum: 96, icon: faTshirt },
        { title: 'Other', color: '#6F8560', sum: 54, icon: faEllipsisH }
    ];
    const expenses = 1.948;
    const income = 2.543;

    const spendingBreakdownData = spendingBreakdown.map(element =>
        <SpendingBreakdownInfo
            title={element.title}
            sum={element.sum}
            icon={element.icon}
            color={element.color} />);

    return (
        <div className="Spending">
            <div className="Spending__Left-Con">
                <SpendingInfo
                    spending={spending} />
                <header>Spending breakdown</header>

                <div className="Spending-Breakdown-Info">
                    {spendingBreakdownData}
                </div>
            </div>
            <div className="Spending__Right-Con">
                <ExpensesIncome
                    expenses={expenses}
                    income={income} />
                <ExpenseChart />
            </div>
        </div>
    )
}