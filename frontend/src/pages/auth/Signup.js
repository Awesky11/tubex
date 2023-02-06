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

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send formData to server
    
    //dispatch(signup(formData));
   
  };

  return (
    <div className="auth-container">
      <div className="auth-center-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Create your new Account</h1>
          <div className="auth-input-container">
            <input
              type="username"
              name="username"
              placeholder="Full name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="auth-input-container">
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={formData.cpassword}
              onChange={handleChange}
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
