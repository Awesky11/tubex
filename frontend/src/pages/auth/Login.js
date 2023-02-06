import React, { useState, useContext, useEffect } from "react";
import "./Auth.css";
import { Link, withRouter } from "react-router-dom";
//import { login, signup, logout } from "../../redux/auth/AuthSlice";
import axios from "axios";

import { setAuthData } from "../../redux/home/Actions";

import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";

const history = createBrowserHistory();

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Code to send formData to server
    try {
      // make a POST request to the server to upload the data
      const response = await axios.post("/api/signup", formData);
      console.log(response.data);
      // Dispatch the signup action to reset the state
      // dispatch(uploadVideoData(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-center-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Sign in</h1>

          <div className="auth-input-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="auth-input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
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
