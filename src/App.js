import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppointmentList from "./components/appointmentList";
import Edit from "./components/edit";
import Create from "./components/create";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Routes>
          <Route exact path="/" element={<AppointmentList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/appointment/add" element={<Create />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
