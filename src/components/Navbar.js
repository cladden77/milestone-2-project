import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar
        color="bg-dark"
        dark
        expand="md"
        className="sticky-top"
        id="top"
      >
        <MDBContainer>
          <MDBNavbarBrand className="me-5">
          <MDBNavbarLink aria-current="page" href="/"><strong className="white-text">JDPC</strong></MDBNavbarLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic} id="navbar-nav">
            <MDBNavbarNav left className="mr-2 mr-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/appointment/add">Schedule</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/Gallery">Gallery</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/About">About Us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default Navbar;
