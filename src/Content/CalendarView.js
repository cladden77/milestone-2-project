import { useState } from "react";
import Calendar from "react-calendar";
import "../CSS/calendar.css";

function CalendarView() {
  const [date, setDate] = useState(new Date());

  function onClickDay(date) {
    console.log(date);
  }

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={onClickDay} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarView;
