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
  MDBBtn,
} from "mdb-react-ui-kit";

function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar
        color="elegant-color-dark"
        dark
        expand="md"
        className="sticky-top"
        id="top"
      >
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">JDPC</strong>
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
                <MDBNavbarLink href="/Packages">Packages</MDBNavbarLink>
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
    </header>
  );
}

export default Navbar;
