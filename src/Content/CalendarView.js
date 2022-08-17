import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/calendar.css";
import { useEffect } from "react";

function CalendarView() {
  const [date, setDate] = useState(new Date());
  var [weekend, setWeekend] = useState(true);

  function onClickDay(date) {
    var string = date.toDateString();
    console.log(date);
    if (
      string.startsWith("Sun") === true ||
      string.startsWith("Sat") === true
    ) {
      console.log("hi");
      setWeekend(false);
    } else {
      setWeekend(true);
    }
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
            {weekend ? (
              <div>
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
            ) : (
              <h4>We are not open on weekends, sorry for inconvenience.</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
