import React, { useState } from "react";
import { useNavigate } from "react-router";
import CalendarView from "../Content/CalendarView";
import "../CSS/calendar.css";

export default function Create() {
<<<<<<< HEAD
 const [form, setForm] = useState({
   date: "",
   time: "",
 });
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
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ date: "", time: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Appointment</h3>
     <form onSubmit={onSubmit}>
<<<<<<< HEAD
       {/* <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div> */}
=======
>>>>>>> f725c2182c24bdf852787451a3f8cfd98aa6dec9
       <div className="form-group">
         <label htmlFor="date">Date</label>
         <input
           type="date"
           className="form-control"
           id="date"
           value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="time">time</label>
         <input
           type="time"
           className="form-control"
           id="time"
           value={form.time}
           onChange={(e) => updateForm({ time: e.target.value })}
         />
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
=======
  const [form, setForm] = useState({
    date: "",
    time: "",
  });
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
      <h3>Create New Appointment</h3>
      <CalendarView />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={form.time}
            onChange={(e) => updateForm({ time: e.target.value })}
          />
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
>>>>>>> eab8a1bc3ba3e1489546696804b8d549a2e6bee7
