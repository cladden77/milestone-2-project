import React from "react";
// BASIC NAVBAR JUST TO GET OUR PAGE SET UP WITH NODE AND MONGO
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/Home">
          JDPC
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/Home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Packages">
                Packages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Gallery">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;