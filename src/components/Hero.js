import React from "react";
import {
  MDBBtn,
} from "mdb-react-ui-kit";

function Hero() {
  
  return (
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80')",
          height: "400px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Heading</h1>
            <h4 className="mb-3">Subheading</h4>
            <MDBBtn href="/Packages" tag="a">
              View Detailing Packages
            </MDBBtn>
          </div>
        </div>
      </div>
  );
}

export default Hero;
