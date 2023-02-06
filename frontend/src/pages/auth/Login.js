import React, { useState, useContext, useEffect } from "react";
import "./Auth.css";
import { Link, withRouter } from "react-router-dom";
//import { login, signup, logout } from "../../redux/auth/AuthSlice";

import { setAuthData } from "../../redux/home/Actions";

import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";

const history = createBrowserHistory();

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("1234567890");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    //dispatch(setAuthData(formData));
    //history.push("/media");
    //history.go();
  };

  return (
    <div className="auth-container">
      <div className="auth-center-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
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
          <button type="submit">Sign in</button>
        </form>
        <div>
          <div className="auth-options">
            <span className="auth-span">New to us?</span>
            <Link to="/signup">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
