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

import { fetchCategoryData, fetchPopularVideos } from "./redux/actions/Actions";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const App = () => {
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    // Set a timer for 10 minutes
    const timeout = setTimeout(() => {
      setIsTimeout(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularVideos());
    dispatch(fetchCategoryData());
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Container fluid="md">
          <Row>
            <Col>
              <main>
                <Fragment>
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
                </Fragment>
              </main>
            </Col>
          </Row>
          <Row>
            <Col>
              <footer>
                <div>
                  <br />
                  <br />
                  <hr style={{ color: "orange", width: "100%" }}></hr>
                  <p>Copyright © {new Date().getFullYear()} tubeX </p>
                  <Link to={`/terms`}>Term & Conditions</Link>
                </div>
              </footer>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
};

export default App;
