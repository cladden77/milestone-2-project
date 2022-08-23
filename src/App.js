import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./Register";
import UserContext from "./UserContext";
import axios from "axios";
import Login from "./Login";
import Navbar from "./components/Navbar";
import Edit from "./components/edit";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Create from "./components/create";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((response) => {
        setEmail(response.data.email);
      });
  }, []);

  function logout() {
    axios
      .post("http://localhost:3000/logout", {}, { withCredentials: true })
      .then(() => setEmail(""));
  }

  return (
    <div className="App">
      <div>
      <Navbar />
      <Hero />
      <div className="Container my-5">
        <UserContext.Provider value={{ email, setEmail }}>
          <BrowserRouter>
            <div>
              {!!email && (
                <div>
                  Logged in as {email}
                  <button onClick={() => logout()}>Log out</button>
                </div>
              )}
              {!email && <div>Not logged in</div>}
            </div>
            <hr />
            <div>
              <Link to={"/login"}>Login</Link> |
              <Link to={"/register"}> Register</Link>
            </div>
            <Routes>
              <Route path={"/register"} element={<Register />} />
              <Route path={"/login"} element={<Login />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/appointment/add" element={<Create />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/About" element={<About />} />
            </Routes>
            <hr />
          </BrowserRouter>
        </UserContext.Provider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
