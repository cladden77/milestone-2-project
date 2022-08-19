import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/calendar.css";
import { useEffect } from "react";

function CalendarView(props) {
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState("");
  // Day var
  var [month, setMonth] = useState(null);
  var [day, setDay] = useState(null);
  var [year, setYear] = useState(null);

  function onClickDay(date) {
    var stringDate = date.toDateString();
    if (
      stringDate.startsWith("Sun") === true ||
      stringDate.startsWith("Sat") === true
    ) {
      props.setWeekend(false);
    } else {
      setMonth(findMonth(stringDate));
      setDay(findDay(stringDate));
      setYear(findYear(stringDate));
      props.setWeekend(true);
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
    props.setSelectedDate(`${year}-${month}-${day}`);
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
            {props.weekend ? (
              <div>
                <h5 className="text-center">Select a time below</h5>
                <div className="availableTime">
                  <button
                    className={active === "1" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("1");
                      props.setTime("08:00 AM");
                    }}
                  >
                    8:00 AM
                  </button>
                  <button
                    className={active === "2" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("2");
                      props.setTime("09:00 AM");
                    }}
                  >
                    9:00 AM
                  </button>
                  <button
                    className={active === "3" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("3");
                      props.setTime("10:00 AM");
                    }}
                  >
                    10:00 AM
                  </button>
                  <button
                    className={active === "4" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("4");
                      props.setTime("11:00 AM");
                    }}
                  >
                    11:00 AM
                  </button>
                  <button
                    className={active === "5" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("5");
                      props.setTime("12:00 AM");
                    }}
                  >
                    12:00 PM
                  </button>
                </div>
                <div className="availableTime">
                  <button
                    className={active === "6" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("6");
                      props.setTime("01:00 PM");
                    }}
                  >
                    1:00 PM
                  </button>
                  <button
                    className={active === "7" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("7");
                      props.setTime("02:00 PM");
                    }}
                  >
                    2:00 PM
                  </button>
                  <button
                    className={active === "8" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("8");
                      props.setTime("03:00 PM");
                    }}
                  >
                    3:00 PM
                  </button>
                  <button
                    className={active === "9" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("9");
                      props.setTime("04:00 PM");
                    }}
                  >
                    4:00 PM
                  </button>
                  <button
                    className={active === "10" ? "active" : "notActive"}
                    onClick={() => {
                      setActive("10");
                      props.setTime("05:00 PM");
                    }}
                  >
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
