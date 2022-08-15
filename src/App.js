import logo from './logo.svg';
import './App.css';
import CalendarView from './Content/CalendarView'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 App">
      <h1>Test</h1>
      <div className="my-5">
      <CalendarView />
      </div>

      <footer class="App-header mt-auto">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
