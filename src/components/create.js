import React, { useState } from "react";
import { useNavigate } from "react-router";
import CalendarView from "../Content/CalendarView";
import "../CSS/calendar.css";
import "../CSS/create.css";
import { useEffect } from "react";

export default function Create() {
  const [form, setForm] = useState({
    date: "",
    time: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [weekend, setWeekend] = useState(true);
  const [selectedTime, setTime] = useState(null);
  const [futureDate, setFutureDate] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();
    setShowConfirm(!showConfirm);
  };

  useEffect(() => {
    setForm({
      date: selectedDate,
      time: selectedTime,
    });
  }, [selectedDate, selectedTime, futureDate]);

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    setShowConfirm(!showConfirm);
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newAppointment = { ...form };

    await fetch("http://localhost:3000/appointment/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ date: "", time: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <CalendarView
        setSelectedDate={setSelectedDate}
        setTime={setTime}
        setWeekend={setWeekend}
        weekend={weekend}
        setFutureDate={setFutureDate}
        futureDate={futureDate}
        showConfirm={showConfirm}
      />
      {showConfirm ? (
        <div className="text-center">
          <br />
          <p>
            Are you sure want to book your apointment on:{" "}
            <span className="selected">{selectedDate}</span> at{" "}
            <span className="selected">{selectedTime}</span>?
          </p>
          <button className="btn btn-primary" onClick={onSubmit}>
            Yes
          </button>
          <button className="btn btn-primary" onClick={handleConfirm}>
            No
          </button>
        </div>
      ) : (
        <form onSubmit={handleConfirm}>
          <div className="form-group my-3">
            <input
              type="submit"
              value="Create appointment"
              className="btn btn-primary"
              disabled={
                !weekend || !futureDate || !selectedTime || !selectedDate
              }
            />
          </div>
        </form>
      )}
    </div>
  );
}
