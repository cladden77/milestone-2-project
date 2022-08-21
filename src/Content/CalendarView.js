import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/calendar.css";
import { useEffect } from "react";

function CalendarView(props) {
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState("");

  // Date Vars
  var [month, setMonth] = useState(null);
  var [day, setDay] = useState(null);
  var [year, setYear] = useState(null);
  var [today, setToday] = useState(new Date());

  // Checks for weekend
  function onClickDay(date) {
    if (date.getDay() === 0 || date.getDay() === 6) {
      props.setWeekend(false);
    } else {
      props.setWeekend(true);
    }
    //Uses selected date to get needed info || padStart Makes sure days/months always have 2 numbers EX "02"
    month = (date.getMonth() + 1).toString().padStart(2, "0");
    setMonth(month);
    year = date.getFullYear();
    setYear(year);
    day = date.getDate().toString().padStart(2, "0");
    setDay(day);
  }

  // Sees if date selected is greater than (Past) current day
  function checksToday() {
    setToday(new Date());
    if (date > today) {
      return true;
    } else {
      return false;
    }
  }

  // Use effect method
  useEffect(() => {
    props.setSelectedDate(`${year}-${month}-${day}`);
    props.setFutureDate(checksToday());
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
            {/* if ture shows code , else showes other */}
            {props.futureDate ? (
              <div>
                {props.weekend ? (
                  <div>
                    <h5 className="text-center my-1">Select a time below</h5>
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
                          props.setTime("5:00 PM");
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
            ) : (
              <h4 className="text-center">
                Sorry, You can not book on past dates OR do same day booking.
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
