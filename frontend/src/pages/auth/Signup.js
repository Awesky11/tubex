import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

import { useSignup } from "../../redux/hooks/useSignup";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "Test",
    email: "test1@gmail.com",
    password: "Admin@123",
    cpassword: "Admin@123",
  });
  const { signup, isLoading, error } = useSignup();

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
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
            />
          </div>
          <div className="auth-input-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input-container">
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={formData.cpassword}
              onChange={handleChange}
            />
          </div>
          <span className="auth-span-small">
            Use 8 or more characters with at least on caps letter and a mix of
            letters, numbers & symbols.
          </span>

          <button type="submit" disabled={isLoading}>
            Sign up
          </button>
          {isLoading && <div className="loader"></div>}
          {!isLoading && error && <div className="error">{error}</div>}
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
