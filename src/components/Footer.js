import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter
      color="bg-dark"
      dark
      className="text-center text-lg-left .fixed-bottom"
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <span className="text-white">
          {" "}
          {new Date().getFullYear()} Copyright &copy; JDPC Established 2022
        </span>
      </div>
    </MDBFooter>
  );
}

export default Footer;
