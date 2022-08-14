import "./App.css";
import Navbar from "./components/Navbar";
import CalendarView from "./Content/CalendarView";

// ADDED NAVBAR DELETED REACT LOGO
function App() {
  return (
    <div className="App">
      <Navbar />
      <CalendarView />
    </div>
  );
}

export default App
