import React, { useState } from "react";
import { useNavigate } from "react-router";
import CalendarView from "../Content/CalendarView";
import "../CSS/calendar.css";
import "../CSS/create.css";

export default function Create() {
  const [form, setForm] = useState({
    date: "",
    time: "",
  });

  const [selectedDate, setDate] = useState(null);

  const [selectedTime, setTime] = useState(null);

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

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
      <CalendarView setDate={setDate} setTime={setTime} />
      <form onSubmit={onSubmit}>
        <div className="group">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={selectedDate}
              onChange={(e) => updateForm({ date: e.target.value })}
            />
          </div>
        </div>
        <div className="group">
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={selectedTime}
              onChange={(e) => updateForm({ time: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create appointment"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}