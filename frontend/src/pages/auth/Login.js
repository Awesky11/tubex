import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useLogin } from "../../redux/auth/useLogin";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
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
            />
          </div>
          <br />
          <button type="submit">Sign in</button>
          {isLoading && <div className="loader"></div>}
          {!isLoading && error && <div className="error">{error}</div>}
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
