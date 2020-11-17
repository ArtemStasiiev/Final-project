import React from "react";
import "../../../styles/components/home/safeToSpend.scss";
import { monthNames } from "../../../config/data.config";

export default function SafeToSpend() {
  return (
    <div className="safe-to-spend">
      <header>Safe to spend</header>
      <div className="safe-to-spend__border">
        <div className="safe-to-spend__content">
          <span className="safe-to-spend__ammount">$1,043.06</span>
          <span className="safe-to-spend__date">
            Until {monthNames[new Date().getMonth() + 1]}, 31
          </span>
        </div>
      </div>
    </div>
  );
}
