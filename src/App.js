import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import Register from "./Register";
import UserContext from "./UserContext";
import axios from "axios";
import Login from "./Login";
import Navbar from "./components/Navbar"

function App() {
  const [email,setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/user', {withCredentials:true})
      .then(response => {
        setEmail(response.data.email);
      });
  }, []);

  function logout() {
    axios.post('http://localhost:4000/logout', {}, {withCredentials:true})
      .then(() => setEmail(''));
  }

  return (
    <div className="App">
      <Navbar />
      <div className="Container my-5">
        <UserContext.Provider value={{email,setEmail}}>
          <BrowserRouter>
            <div>
              {!!email && (
                <div>
                  Logged in as {email}
                  <button onClick={() => logout()}>Log out</button>
                </div>
              )}
              {!email && (
                <div>Not logged in</div>
              )}
            </div>
            <hr/>
            <div>
              <Link to={'/login'}>Login</Link> | 
              <Link to={'/register'}> Register</Link>
            </div>
            <Routes>
              <Route path={'/register'} element={<Register/>} />
              <Route path={'/login'} element={<Login/>} />
            </Routes>
            <hr/>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;