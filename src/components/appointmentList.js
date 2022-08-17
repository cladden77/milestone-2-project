import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Appointment = (props) => (
 <tr>
   <td>{props.appointment.name}</td>
   <td>{props.appointment.position}</td>
   <td>{props.appointment.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.appointment._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteAppointment(props.appointment._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function AppointmentList() {
 const [appointments, setAppointments] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getAppointments() {
     const response = await fetch(`http://localhost:3000/appointment/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setAppointments(records);
   }
 
   getAppointments();
 
   return;
 }, [appointments.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:3000/${id}`, {
     method: "DELETE"
   });
 
   const newAppointments = appointments.filter((el) => el._id !== id);
   setAppointments(newAppointments);
 }
 
 // This method will map out the records on the table
 function appointmentList() {
   return appointments.map((appointment) => {
     return (
       <Appointment
         record={appointment}
         deleteRecord={() => deleteRecord(appointment._id)}
         key={appointment._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Appointment List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{appointmentList()}</tbody>
     </table>
   </div>
 );
}