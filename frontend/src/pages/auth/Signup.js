import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { login, signup, logout } from "../../redux/auth/AuthSlice";
import "./Auth.css";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Signup = () => {
  //const isLoggedIn = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("Awesky");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("1234567890");
  const [cpassword, setCPassword] = useState("1234567890");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send formData to server
    const formData = { username, email, password, cpassword };
    //dispatch(signup(formData));
    history.push("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-center-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Create your new Account</h1>
          <div className="auth-input-container">
            <input
              type="username"
              placeholder="Full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-container">
            <input
              type="password"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
          </div>
          <span className="auth-span-small">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </span>

          <button type="submit">Sign up</button>
        </form>

        <div>
          <div className="auth-options">
            <span className="auth-span">Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
