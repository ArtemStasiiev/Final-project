import React, { useState } from "react";
import "../../../styles/components/home/upcomingBills.scss";

export default function UpcomingBills(props) {
  const date = new Date();
  const currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const getNextDate = () => {
    const today = new Date(selectedDate);
    const currentMonth = new Date(selectedDate).getMonth();
    const nextDate = new Date(
      today.getFullYear(),
      currentMonth + 1,
      today.getDate()
    );
    const date = nextDate || new Date();
    setSelectedDate(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };
  return (
    <div className="bills">
      <div className="bills__left">
        <img src={require(`../../../../img/${props.image}`)} alt="" />
        <div className="bills__left-info">
          <div>{props.title}</div>
          <div className="bills__date">{selectedDate}</div>
        </div>
      </div>
      <div className="bills__right">
        ${props.price}
        <button onClick={getNextDate}>Pay</button>
      </div>
    </div>
  );
}
