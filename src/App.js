import React from "react";
import "./App.css"

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppointmentList from "./components/appointmentList";
import Edit from "./components/edit";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Create from "./components/create";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Hero />
      <div>
        <Routes>
          <Route exact path="/" element={<AppointmentList />} />
          <Route path="/update/:id" element={<Edit />} />
          <Route path="/appointment/add" element={<Create />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
