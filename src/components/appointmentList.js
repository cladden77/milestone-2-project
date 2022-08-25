import React, { useEffect, useState } from "react";

const Appointment = (props) => (
  <tr>
    <td>{props.appointment.date}</td>
    <td>{props.appointment.time}</td>
    <td>
      <a href={`/update/${props.appointment._id}`}>
        <button className="btn btn-link">Edit</button>
      </a>
      |
      <button
        className="btn btn-link"
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

  // This method fetches the appointments from the database.
  useEffect(() => {
    async function getAppointments() {
      const response = await fetch(`http://localhost:3000/appointment/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const appointments = await response.json();
      setAppointments(appointments);
    }

    getAppointments();
    return;
  }, [appointments.length]);

  // This method will delete a record
  async function deleteAppointment(id) {
    await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    });

    const newAppointments = appointments.filter((el) => el._id !== id);
    setAppointments(newAppointments);
  }

  // This method will map out the Appointments on the table
  function appointmentList() {
    return appointments.map((appointment) => {
      return (
        <Appointment
          appointment={appointment}
          deleteAppointment={() => deleteAppointment(appointment._id)}
          key={appointment._id}
        />
      );
    });
  }

  // This following section will display the table with the Appointments of individuals.
  return (
    <div className="container mt-5">
      <h3>Appointment List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{appointmentList()}</tbody>
      </table>
    </div>
  );
}
