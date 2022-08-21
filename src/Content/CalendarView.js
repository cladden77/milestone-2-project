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

  const [data, setData] = useState(null);
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
    fetch(`http://localhost:3000/appointment/`)
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw responce;
      })
      .then((data) => {
        setData(data);
        checkAvailability();
      });
  }, [month, year, day, props]);

  //Functionality Works but needs worked on

  function checkAvailability(string) {
    reset();
    if (data != null) {
      for (var i = 0; i < data.length; i++) {
        let selectedElement = document.getElementById(data[i].time);
        if (props.selectedDate === data[i].date) {
          if (selectedElement === null) {
            return;
          } else {
            selectedElement.classList.add("takenTime");
          }
        }
      }
    } else {
      return;
    }
  }

  function reset() {
    let a = document.getElementById("08:00_AM");
    let b = document.getElementById("09:00_AM");
    let c = document.getElementById("10:00_AM");
    let d = document.getElementById("11:00_AM");
    let e = document.getElementById("12:00_PM");
    let f = document.getElementById("01:00_PM");
    let g = document.getElementById("02:00_PM");
    let h = document.getElementById("03:00_PM");
    let i = document.getElementById("04:00_PM");
    let j = document.getElementById("05:00_PM");
    if (a === null) {
      return;
    } else {
      a.classList.remove("takenTime");
    }
    if (b === null) {
      return;
    } else {
      b.classList.remove("takenTime");
    }
    if (c === null) {
      return;
    } else {
      c.classList.remove("takenTime");
    }
    if (d === null) {
      return;
    } else {
      d.classList.remove("takenTime");
    }
    if (e === null) {
      return;
    } else {
      e.classList.remove("takenTime");
    }
    if (f === null) {
      return;
    } else {
      f.classList.remove("takenTime");
    }
    if (g === null) {
      return;
    } else {
      g.classList.remove("takenTime");
    }
    if (h === null) {
      return;
    } else {
      h.classList.remove("takenTime");
    }
    if (i === null) {
      return;
    } else {
      i.classList.remove("takenTime");
    }
    if (j === null) {
      return;
    } else {
      j.classList.remove("takenTime");
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
                className={props.showConfirm ? "noClick" : null}
                onChange={setDate}
                value={date}
                onClickDay={onClickDay}
              />
            </div>
            {props.showConfirm ? null : (
              <div>
                {/* if ture shows code , else showes other */}
                {props.futureDate ? (
                  <div>
                    {props.weekend ? (
                      <div>
                        <h5 className="text-center my-1">
                          Select a time below
                        </h5>
                        <div className="availableTime">
                          <button
                            type="button"
                            id={"08:00_AM"}
                            className={`button ${
                              active === "1" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("1");
                              props.setTime("08:00_AM");
                            }}
                          >
                            8:00 AM
                          </button>
                          <button
                            type="button"
                            id={"09:00_AM"}
                            className={`button ${
                              active === "2" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("2");
                              props.setTime("09:00_AM");
                            }}
                          >
                            9:00 AM
                          </button>
                          <button
                            type="button"
                            id={"10:00_AM"}
                            className={`button ${
                              active === "3" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("3");
                              props.setTime("10:00_AM");
                            }}
                          >
                            10:00 AM
                          </button>
                          <button
                            type="button"
                            id={"11:00_AM"}
                            className={`button ${
                              active === "4" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("4");
                              props.setTime("11:00_AM");
                            }}
                          >
                            11:00 AM
                          </button>
                          <button
                            type="button"
                            id={"12:00_PM"}
                            className={`button ${
                              active === "5" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("5");
                              props.setTime("12:00_PM");
                            }}
                          >
                            12:00 PM
                          </button>
                        </div>
                        <div className="availableTime">
                          <button
                            type="button"
                            id={"01:00_PM"}
                            className={`button ${
                              active === "6" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("6");
                              props.setTime("01:00_PM");
                            }}
                          >
                            1:00 PM
                          </button>
                          <button
                            type="button"
                            id={"02:00_PM"}
                            className={`button ${
                              active === "7" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("7");
                              props.setTime("02:00_PM");
                            }}
                          >
                            2:00 PM
                          </button>
                          <button
                            type="button"
                            id={"03:00_PM"}
                            className={`button ${
                              active === "8" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("8");
                              props.setTime("03:00_PM");
                            }}
                          >
                            3:00 PM
                          </button>
                          <button
                            type="button"
                            id={"04:00_PM"}
                            className={`button ${
                              active === "9" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("9");
                              props.setTime("04:00_PM");
                            }}
                          >
                            4:00 PM
                          </button>
                          <button
                            type="button"
                            id={"04:00_PM"}
                            className={`button ${
                              active === "10" ? "active" : "notActive"
                            }`}
                            onClick={() => {
                              setActive("10");
                              props.setTime("05:00_PM");
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
                    Sorry, You can not book on past dates OR do same day
                    booking.
                  </h4>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
