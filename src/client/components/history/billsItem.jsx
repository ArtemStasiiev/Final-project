import React,{Component} from 'react';
import '../../styles/components/history/billsItem.scss'

// class BillsItem extends Component {
//     render() {
//         return(
//             <div className="BillsItem">
//                 <div className="BillsItem__Left-Con">
//                     {props.title}
//                 </div>

//                 <div className="BillsItem__Right-Con">
//                     ${props.price}
//                 </div>
//             </div>
//         )
//     }
// }

// export default BillsItem

export default function BillsItem(props) {
    return (
        <div className="BillsItem">
            <div className="BillsItem__Left-Con">
                <img src={props.image} alt=""/>
                <div>
                    {props.title}
                </div>
            </div>

            <div className="BillsItem__Right-Con">
                ${props.price}
            </div>
        </div>
    )
}