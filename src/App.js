// import { BrowserRouter as Router, Route } from "react-router-dom";
// import React from "react";
// import "./App.css";
// import Gallery from "./components/Gallery";
// import Navbar from "./components/Navbar";
// import CalendarView from "./Content/CalendarView";
// import About from "./components/About";
// import Packages from "./components/Packages";
// import AppointmentList from "./components/appointmentList";
// import Edit from "./components/edit";
// import Create from "./components/create";

// // ADDED NAVBAR DELETED REACT LOGO
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Appointment />
//         <CalendarView />
//         <Gallery />
//         <About />
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/Navbar";
import AppointmentList from "./components/appointmentList";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<AppointmentList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;
