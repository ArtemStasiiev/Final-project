// import React, { Component } from 'react';
import React, {useState} from 'react';
import '../../../styles/components/home/sendMoney.scss';
import NumberFormat from 'react-number-format';
// import { useState } from 'react';

// class SendMoney extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cardNumber: 0,
//             sum: 0,
//             // disabled: true
//         }
//     }
//     handleCardNumberChange = (event) => {
//         this.setState({ cardNumber: event.target.value });
//     }

//     handleSumChange = (event) => {
//         this.setState({ sum: event.target.value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//     }

//     clearInputValues = (event) => {
//         this.setState({cardNumber: 0, sum: 0})
//     }

//     render() {
//         const { cardNumber, sum } = this.state; 
//         return (
//             <div className="Send-Money">
//                 <header>Send money</header>

//                 <form className="Send-Money__Form">
//                     <div className="Send-Money__Inputs__Input">
//                         <NumberFormat
//                             type="text"
//                             name="cardNumber"
//                             format="#### #### #### ####"
//                             mask="_ "
//                             autoComplete="off"
//                             required
//                             onChange={this.handleCardNumberChange}
//                             value={this.state.cardNumber} />
//                         <label for="cardNumber" className="Send-Money__Inputs__Input-Label">
//                             <span className="Send-Money__Inputs__Input-Span">Card Number</span>
//                         </label>
//                     </div>

//                     <div className="Send-Money__Inputs__Input">
//                         <NumberFormat
//                             type="text" name="cardNumber"
//                             thousandSeparator={true}
//                             prefix={'$'}
//                             autoComplete="off"
//                             required
//                             onChange={this.handleSumChange}
//                             value={this.state.sum} />
//                         <label for="cardNumber" className="Send-Money__Inputs__Input-Label">
//                             <span className="Send-Money__Inputs__Input-Span">Sum</span>
//                         </label>
//                     </div>
//                     <button type="button" className="Send-Money__Button" onClick={this.clearInputValues} disabled={!sum.length || cardNumber.length > 19}>Send</button>
//                 </form>
//             </div>
//         )
//     }
// }
// 
// export default SendMoney;

export default function SendMoney() {

    const [cardNumber, setCardNumber] = useState('');
    const [sum, setSum] = useState(0);

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    }

    const handleSumChange = (event) => {
        setSum(event.target.value);
    }

    // function handleSubmit (event) {
    //     event.preventDefault();
    // }

    const clearInputValues = (event) => {
        setCardNumber('');
        setSum(0);
    }

    return (
        <div className="Send-Money">
            <header>Send money</header>

            <form className="Send-Money__Form">
                <div className="Send-Money__Inputs__Input">
                    <NumberFormat
                        type="text"
                        name="cardNumber"
                        format="#### #### #### ####"
                        mask="_ "
                        autoComplete="off"
                        required
                        onChange={handleCardNumberChange}
                        value={cardNumber} />
                    <label for="cardNumber" className="Send-Money__Inputs__Input-Label">
                        <span className="Send-Money__Inputs__Input-Span">Card Number</span>
                    </label>
                </div>

                <div className="Send-Money__Inputs__Input">
                    <NumberFormat
                        type="text" name="cardNumber"
                        thousandSeparator={true}
                        prefix={'$'}
                        autoComplete="off"
                        required
                        onChange={handleSumChange}
                        value={sum} />
                    <label for="cardNumber" className="Send-Money__Inputs__Input-Label">
                        <span className="Send-Money__Inputs__Input-Span">Sum</span>
                    </label>
                </div>
                <button type="button" className="Send-Money__Button" onClick={clearInputValues} disabled={!sum.length || cardNumber.length > 19}>Send</button>
            </form>
        </div>
    )
}