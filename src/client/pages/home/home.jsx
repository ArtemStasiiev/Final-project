import React, { Component } from 'react';
import '../../styles/pages/home.scss';
import Wallet from '../../components/home/wallet/wallet';
import SendMoney from '../../components/home/sendMoney/sendMoney';
import UpcomingBills from '../../components/home/upcomingBills/upcomingBills'
import SpendingBreakdown from '../../components/home/spendingBreakdown/spendingBreakdown'
import { resetIdCounter } from 'react-tabs';
// import upcomingBills from './UpcomingBills/UpcomingBills';
// import moment from 'moment'

const upcomingBills = [
    { title: 'Netflix', price: 12.00, image: require('../../../img/netflix-icon.jpg'), id: 1, date: '2020-07-21' },
    { title: 'Apple TV', price: 10.00, image: require('../../../img/apple-tv-icon.svg'), id: 2, date: '2020-07-21' },
    { title: '+38 063 56 87 154', price: 5.00, image: require('../../../img/lifecell-icon.jpg'), id: 3, date: '2020-07-21' }
];

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const spendingBreakdown = [
    { title: 'Grocery', sum: 766.38},
    { title: 'Bills', sum: 456.91 },
    { title: 'Transport', sum: 255.28 },
    { title: 'Subscriptions', sum: 181.42 },
    { title: 'Entertainment', sum: 134.56 },
    { title: 'Apparel', sum: 96.83 },
    { title: 'Other', sum: 54.73 }
];

const selectedDate = null;

const startDate = new Date('2020-07-21');

export default function Home() {

    const upcomingBillsData = upcomingBills.map(element =>
        <UpcomingBills
            title={element.title}
            price={element.price}
            image={element.image}
            id={element.id}
            date={element.date} />);

    const spendingBreakdownData = spendingBreakdown.map(element =>
        <SpendingBreakdown
            title={element.title}
            color={element.color}
            ammount={element.sum} />);

    return (
        <div className="Home">
        <div className="Home__Left-Con">
            <Wallet />
            <SendMoney />
        </div>
        <div className="Home__Right-Con">
            <div className="Upcoming-Bills">
                <header>Upcoming Bills </header>
                <div className="Upcoming-Bills__Month">
                    {monthNames[new Date().getMonth()]}
                </div>
                {upcomingBillsData}
            </div>
            <div className="Spending-Breakdown">
                <header>Spending breakdown</header>
                {spendingBreakdownData}
            </div>
        </div>
    </div>
    );
}



// import React, { Component } from 'react';
// import '../../styles/pages/home.scss';
// import Wallet from '../../components/home/wallet/wallet';
// import SendMoney from '../../components/home/sendMoney/sendMoney';
// import UpcomingBills from '../../components/home/upcomingBills/upcomingBills'
// import SpendingBreakdown from '../../components/home/spendingBreakdown/spendingBreakdown'
// // import upcomingBills from './UpcomingBills/UpcomingBills';
// // import moment from 'moment'
// class Home extends Component {

//     state = {
//         upcomingBills: [
//             { title: 'Netflix', price: 12, image: require('../../../img/netflix-icon.jpg'), id: 1, date: '2020-07-21' },
//             { title: 'Apple TV', price: 10, image: require('../../../img/apple-tv-icon.svg'), id: 2, date: '2020-07-21' },
//             { title: '+38 063 56 87 154', price: 5, image: require('../../../img/lifecell-icon.jpg'), id: 3, date: '2020-07-21' }
//         ],
//         monthNames: ["January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ],
//         spendingBreakdown: [
//             { title: 'Grocery', sum: 766 },
//             { title: 'Bills', sum: 456 },
//             { title: 'Transport', sum: 255 },
//             { title: 'Subscriptions', sum: 181 },
//             { title: 'Entertainment', sum: 134 },
//             { title: 'Apparel', sum: 96 },
//             { title: 'Other', sum: 54 }
//         ],
//         selectedDate: null,
//         startDate: new Date('2020-07-21')
//     }

//     render() {
//         const upcomingBills = this.state.upcomingBills.map(element =>
//             <UpcomingBills
//                 title={element.title}
//                 price={element.price}
//                 image={element.image}
//                 id={element.id}
//                 date={element.date} />);

//         const spendingBreakdown = this.state.spendingBreakdown.map(element =>
//             <SpendingBreakdown
//                 title={element.title}
//                 color={element.color}
//                 ammount={element.sum} />);

//         return (
//             <div className="Home">
//                 <div className="Home__Left-Con">
//                     <Wallet />
//                     <SendMoney />
//                 </div>
//                 <div className="Home__Right-Con">
//                     <div className="Upcoming-Bills">
//                         <header>Upcoming Bills </header>
//                         <div className="Upcoming-Bills__Month">
//                             {this.state.monthNames[new Date().getMonth()]}
//                         </div>
//                         {upcomingBills}
//                     </div>
//                     <div className="Spending-Breakdown">
//                         <header>Spending breakdown</header>
//                         {spendingBreakdown}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Home;
