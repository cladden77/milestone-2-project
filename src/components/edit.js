import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   date: "",
   time: "",
   appointments: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:3000/appointments/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const appointments = await response.json();
     if (!appointments) {
       window.alert(`appointments with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(appointments);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedAppointment = {
     date: form.date,
     time: form.time,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:3000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedAppointment),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="date">Date: </label>
         <input
           type="text"
           className="form-control"
           id="date"
           value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="time">Time: </label>
         <input
           type="text"
           className="form-control"
           id="time"
           value={form.time}
           onChange={(e) => updateForm({ time: e.target.value })}
         />
       </div>

       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Appointment"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}