import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/home/Home";
import Media from "./pages/media/Media";
import Error from "./pages/error/Error";
import Terms from "./pages/terms/Terms";
import ViewAll from "./pages/viewall/ViewAll";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminPanel from "./pages/admin/AdminPanel";
import Navbar from "./components/navbar/Navbar";

import { fetchCategoryData, fetchPopularVideos } from "./redux/home/Actions";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const DashBoard = ({ screenWidth }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularVideos());
    dispatch(fetchCategoryData());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="media" element={<Media />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="error" element={<Error />} />
          <Route path="viewall" element={<ViewAll />} />
          <Route path="terms" element={<Terms />} />
        </Routes>

        <div>
          <p>Copyright © {new Date().getFullYear()} tubeX </p>
          <Link to={`/terms`}>Term & Conditions</Link>
        </div>
      </Fragment>
    </Router>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set a timer for 10 minutes
    const timeout = setTimeout(() => {
      setIsTimeout(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    // Check if the user is authenticated
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("token");
    if (email && token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="app">
      <>
        {
          <DashBoard screenWidth={screenWidth} />
          //<AdminDashBoard screenWidth={screenWidth} />
        }
      </>
    </div>
  );
};

export default App;
