import React, { useState } from "react";
import "./Navbar.css";
import Home from "../../assets/svgs/home.svg";
import User from "../../assets/svgs/user.svg";

import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Search from "../search/Search";

const history = createBrowserHistory();

const Navbar = () => {
  return (
    <div className="container">
      {/* <div>
        <p>Welcome, {store.getState().user.username}</p>
        <button onClick={handleLogout}>Logout</button>
      </div> */}
      <Link className="container-tab" to="/">
        <img src={Home} className="container-home" />
      </Link>
      <Search />

      <Link className="container-tab" to="/login">
        <img src={User} className="container-home" />
      </Link>
    </div>
  );
};

export default Navbar;
