import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

function Hero() {
  return (
    <div className="hero">
    <div
      id="mainCarImg"
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80')",
        height: "25em",
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Welcome to JDPC Detailing</h1>
          <h2 className="mb-3">Where professional detailing meets custom design and flawless results</h2>
          <MDBBtn href="/Appointment/add" tag="a">
            Book Appointment
          </MDBBtn>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
