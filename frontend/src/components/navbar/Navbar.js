import React, { useState } from "react";
import "./Navbar.css";
import Home from "../../assets/svgs/home.svg";
import User from "../../assets/svgs/user.svg";

import { Link, useNavigate } from "react-router-dom";
import UserModal from "../usermodel/UserModal";

import Search from "../search/Search";
import { useLogout } from "../../redux/hooks/useLogout";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const { logout } = useLogout();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(!open);
  };

  const handleUserModel = () => {
    const userData = JSON.stringify(localStorage.getItem("user"));
    const user = JSON.parse(userData);

    setUser(user);
    if (!user) {
      navigate("/login");
    } else {
      setOpen(!open);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link className="navbar-tab" to="/">
          <img src={Home} className="navbar-home" />
        </Link>

        <Search />

        <UserModal open={open} user={user} handleLogout={handleLogout} />

        <div className="navbar-tab" onClick={handleUserModel}>
          <img src={User} className="navbar-home" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
