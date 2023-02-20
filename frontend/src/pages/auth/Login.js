import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../redux/hooks/useLogin";
import { AlertMessage } from "../../components/common/Common";
import Error from "../../assets/svgs/error.svg";
import Cross from "../../assets/svgs/cross.svg";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-center-container">
        <span className="span-img">
          <img src={Cross} className="icon" onClick={handleClose} />
        </span>
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Sign in</h1>

          <div className="auth-input-container">
            <input
              type="email"
              name="email"
              placeholder="Email-Id"
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
          {!isLoading && error && (
            <>
              <AlertMessage message={error} variant={"danger"} source={Error} />
            </>
          )}
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
