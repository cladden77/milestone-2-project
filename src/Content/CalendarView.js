import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/calendar.css";
import { useEffect } from "react";

function CalendarView(month) {
  const [date, setDate] = useState(new Date());
  // Day var
  var [weekend, setWeekend] = useState(true);
  var [month, setMonth] = useState(null);
  var [day, setDay] = useState(null);
  var [year, setYear] = useState(null);
  function onClickDay(date) {
    var stringDate = date.toDateString();
    if (
      stringDate.startsWith("Sun") === true ||
      stringDate.startsWith("Sat") === true
    ) {
      setWeekend(false);
    } else {
      setMonth(findMonth(stringDate));
      setDay(findDay(stringDate));
      setYear(findYear(stringDate));
      setWeekend(true);
    }
  }

  function findMonth(stringDate) {
    if (stringDate.search("Jan") >= 0) {
      return (month = "01");
    } else if (stringDate.search("Feb") >= 0) {
      return (month = "02");
    } else if (stringDate.search("Mar") >= 0) {
      return (month = "03");
    } else if (stringDate.search("Apr") >= 0) {
      return (month = "04");
    } else if (stringDate.search("May") >= 0) {
      return (month = "05");
    } else if (stringDate.search("Jun") >= 0) {
      return (month = "06");
    } else if (stringDate.search("Jul") >= 0) {
      return (month = "07");
    } else if (stringDate.search("Aug") >= 0) {
      return (month = "08");
    } else if (stringDate.search("Sep") >= 0) {
      return (month = "09");
    } else if (stringDate.search("Oct") >= 0) {
      return (month = "10");
    } else if (stringDate.search("Nov") >= 0) {
      return (month = "11");
    } else if (stringDate.search("Dec") >= 0) {
      return (month = "12");
    }
  }

  function findDay(stringDate) {
    return (day = stringDate.slice(8, 10));
  }

  function findYear(stringDate) {
    return (year = stringDate.slice(11, 16));
  }
  // Use effect method
  useEffect(() => {
    console.log(`${month}/${day}/${year}`);
  }, [month, day, year]);

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
