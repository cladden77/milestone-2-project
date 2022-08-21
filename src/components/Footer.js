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
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://milestone-2-project-hxc2qnrjn-cladden77.vercel.app/">
          JDPC Established 2022
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
