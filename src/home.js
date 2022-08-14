import "./App.css";
import Navbar from "./components/Navbar";
import CalendarView from "./Content/CalendarView";

// ADDED NAVBAR DELETED REACT LOGO
function Home() {
  return (
    <div className="App">
      <Navbar />
      <CalendarView />
    </div>
  );
}

export default Home;
