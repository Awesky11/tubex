import React, { useState } from "react";
import "./Navbar.css";
import Home from "../../assets/svgs/home.svg";
import User from "../../assets/svgs/user.svg";

import { Link, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import UserModal from "../usermodel/UserModal";

import Search from "../search/Search";

const history = createBrowserHistory();

const Navbar = () => {
  const [user, setUser] = useState({});

  const handleUserModel = () => {
    const userData = JSON.stringify(localStorage.getItem("user"));
    const user = JSON.parse(userData);
    console.log(user);

    setUser(user);
    if (!user) {
      history.push("/login");
      history.go();
    }
  };

  return (
    <div className="container">
      <Link className="container-tab" to="/">
        <img src={Home} className="container-home" />
      </Link>

      <Search />

      <UserModal user={user} handleUserModel={handleUserModel} />

      <div className="container-tab" onClick={handleUserModel}>
        <img src={User} className="container-home" />
      </div>
    </div>
  );
};

export default Navbar;
