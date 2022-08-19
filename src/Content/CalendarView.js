import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/calendar.css";
import { useEffect } from "react";

function CalendarView(props) {
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
    props.setDate(`${year}-${month}-${day}`);
  }, [month, day, year, props]);

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
                <h5 className="text-center">Selecet a time below</h5>
                <div className="availableTime">
                  <button id="eightAM" onClick={() => props.setTime("08:00")}>
                    8:00 AM
                  </button>
                  <button id="nineAM" onClick={() => props.setTime("09:00")}>
                    9:00 AM
                  </button>
                  <button id="tenAM" onClick={() => props.setTime("10:00")}>
                    10:00 AM
                  </button>
                  <button id="elevenAM" onClick={() => props.setTime("11:00")}>
                    11:00 AM
                  </button>
                  <button id="twelveAM" onClick={() => props.setTime("12:00")}>
                    12:00 PM
                  </button>
                </div>
                <div className="availableTime">
                  <button id="onePM" onClick={() => props.setTime("13:00")}>
                    1:00 PM
                  </button>
                  <button id="twoPM" onClick={() => props.setTime("14:00")}>
                    2:00 PM
                  </button>
                  <button id="threePM" onClick={() => props.setTime("15:00")}>
                    3:00 PM
                  </button>
                  <button id="fourPM" onClick={() => props.setTime("16:00")}>
                    4:00 PM
                  </button>
                  <button id="fivePM" onClick={() => props.setTime("17:00")}>
                    5:00 PM
                  </button>
                </div>
              </div>
            ) : (
              <h4 className="text-center">
                We are not open on weekends, sorry for inconvenience.
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
