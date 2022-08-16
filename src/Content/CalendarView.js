import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/calendar.css";

function CalendarView() {
  const [date, setDate] = useState(new Date());

  function onClickDay(date) {
    console.log(date);
  }

  function test(value) {
    console.log(!value);
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
            <h5>Selecet a time below</h5>
            <div className="availableTime">
              <button id="eightAM">8:00</button>
              <button id="nineAM">9:00</button>
              <button id="tenAM">10:00</button>
              <button id="elevenAM">11:00</button>
              <button id="twelve">12:00</button>
              <button id="onePM">1:00</button>
              <button id="twoPM">2:00</button>
              <button id="threePM">3:00</button>
              <button id="fourPM">4:00</button>
              <button id="fivePM">5:00</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
