import React from 'react';
import '../../styles/components/spending/spendingInfo.scss'

export default function SpendingInfo (props) {
        return (
            <div className="Spending-Info">
                <header>Spending</header>

                <div className="Spending-Info__Sum">
                    {props.spending} <span>USD</span> 
                </div>
            </div>
        );
}