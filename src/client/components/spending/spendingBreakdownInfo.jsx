import React from 'react';
import '../../styles/components/spending/spendingBreakdownInfo.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SpendingBreakdownInfo (props) {
    return (

        <div className="Spending-Breakdown-Info__Item">
            <div className="Spending-Breakdown-Info__Name">
                <div className="Spending-Breakdown-Info__Icon-Con">
                    <div style={{ backgroundColor: `${props.color}` }}>
                        <FontAwesomeIcon icon={props.icon} />
                    </div>
                </div>
                <div className="Spending-Breakdown-Info__Item-Name">{props.title}</div>
            </div>

            <div className="Spending-Breakdown-Info__Item-Price">{props.sum} <span>USD</span> </div>
        </div>
    );
}

