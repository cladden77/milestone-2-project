import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import CalendarView from "./Content/CalendarView";
import About from "./components/About";
import Packages from "./components/Packages";

// ADDED NAVBAR DELETED REACT LOGO
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <CalendarView />
        <Gallery />
        <About />
      </Router>
    </div>
  );
}

export default App;
