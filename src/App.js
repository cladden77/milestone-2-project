import logo from './logo.svg';
import './App.css';
import CalendarView from './Content/Calendar.js';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <CalendarView />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
