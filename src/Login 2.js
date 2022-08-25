import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const user = useContext(UserContext);

  function loginUser(e) {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("http://localhost:3000/login", data, { withCredentials: true })
      .then((response) => {
        user.setEmail(response.data.email);
        setEmail("");
        setPassword("");
        setLoginError(false);
      })
      .catch(() => {
        setLoginError(true);
      });
  }

  const navigate = useNavigate();

  return (
    <div className="my-5">
      <form action="" onSubmit={(e) => loginUser(e)}>
        {loginError && <div>LOGIN ERROR! WRONG EMAIL OR PASSWORD!</div>}
        <div className="my-3">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={() => navigate("/")}>
          log in
        </button>
      </form>
    </div>
  );
}

export default Login;
