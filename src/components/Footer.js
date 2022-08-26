import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  return (

    <MDBFooter
      color="bg-dark"
      dark
      className="text-center mt-auto text-center p-3"
    >
        <span className="text-white">
          {" "}
          {new Date().getFullYear()} Copyright &copy; JDPC Established 2022
        </span>
    </MDBFooter>
  );
}

export default Footer;
