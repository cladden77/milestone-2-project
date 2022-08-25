import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import CalendarView from "../Content/CalendarView";
import "../CSS/calendar.css";
import "../CSS/create.css";
import { useEffect } from "react";

export default function Edit({ appointment }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
  });

  const params = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [weekend, setWeekend] = useState(false);
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
    const updateAppointment = { ...form };

    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAppointment),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ date: "", time: "" });
    navigate("/");
  }
  return (
    <div>
      <CalendarView
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        setTime={setTime}
        selectedTime={selectedTime}
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
            Are you sure want to update your apointment on:{" "}
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
              value="Update appointment"
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
