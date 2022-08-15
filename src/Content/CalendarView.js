import { useState } from "react";
import Calendar from "react-calendar";
import "../CSS/calendar.css";

function CalendarView() {
  const [date, setDate] = useState(new Date());

  function onClickDay(date) {
    alert(date);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="app">
            <h1 className="text-center">Schedule an Appointment Below:</h1>
            <div className="calendar-container">
              <Calendar
                onChange={setDate}
                value={date}
                onClickDay={onClickDay}
              />
            </div>
            <p className="text-center">
              <span className="bold">Selected Date:</span> {date.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
