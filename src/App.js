import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./Register";
import UserContext from "./UserContext";
import axios from "axios";
import Login from "./Login";

function App() {
  const [email,setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/user', {withCredentials:true})
      .then(response => {
        setEmail(response.data.email);
      });
  }, []);

  function logout() {
    axios.post('http://localhost:3000/logout', {}, {withCredentials:true})
      .then(() => setEmail(''));
  }

  return (
    <main className="App">
      <BrowserRouter>
      <Navbar />
      <Hero />
    <UserContext.Provider value={{email,setEmail}}>
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
          <Link to={'/'}>Home</Link> |
          <Link to={'/login'}>Login</Link> |
          <Link to={'/register'}>Register</Link>
        </div>
        <Routes>
          <Route path={'/register'} element={<Register/>} />
          <Route path={'/login'} element={<Login/>} />
        </Routes>
        <hr/>
    </UserContext.Provider>
    </BrowserRouter>
    </main>
  );
}

export default App;