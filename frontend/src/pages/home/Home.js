import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Ratio from "react-bootstrap/Ratio";
import Play from "../../assets/svgs/play.svg";
import { Link } from "react-router-dom";
import { PosterBanner } from "../../components/poster/Poster";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Home = React.memo(() => {
  const store = useSelector((state) => state);

  const {
    videosStore: { videos, error, loading },
    dataStore: { data, dataError, dataLoading },
  } = store;

  const onClick = () => {
    history.push("/viewall");
    history.go();
  };

  const Heading = ({ title, onClick }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          cursor: onClick ? "pointer" : "",
        }}
        onClick={onClick}
      >
        <hr style={{ color: "gray", width: "35%" }}></hr>
        <span
          style={{
            color: "white",
            border: "1px solid white",
            paddingLeft: 6,
            paddingRight: 6,
          }}
        >
          {title}
        </span>
        <hr style={{ color: "gray", width: "35%" }}></hr>
      </div>
    );
  };

  const Banner = ({
    source = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  }) => {
    return (
      <Container>
        <Ratio aspectRatio="16x9">
          <div>
            <img className="home-banner-card-img" src={source} />

            <Link
              to="/media"
              state={{
                data: url,
              }}
              className="home-banner-card-play-icon-holder"
            >
              <div>
                <img className="home-banner-card-play-icon" src={Play} />
              </div>
            </Link>
          </div>
        </Ratio>
      </Container>
    );
  };

  const TopVideos = ({ arr = [1, 2, 3] }) => {
    return (
      <Container>
        <Row>
          <Heading title={"TOP VIDEOS"} />
        </Row>
        <br />
        <Row>
          {arr.map((item) => {
            return (
              <Col>
                <Banner />
              </Col>
            );
          })}
        </Row>
        <br />
        <Row>
          {arr.map((item) => {
            return (
              <Col>
                <Banner />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };

  const FeaturedVideos = ({ arr = [1, 2] }) => {
    return (
      <Container>
        <Row>
          <Heading title={"FEATURED"} />
        </Row>
        <br />
        <Row>
          {arr.map((item) => {
            return (
              <Col>
                <Banner />
              </Col>
            );
          })}
        </Row>
        <br />
        <Row>
          {arr.map((item) => {
            return (
              <Col>
                <Banner />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };

  const LatestVideos = ({ arr = [1, 2] }) => {
    return (
      <Container>
        <Row>
          <Heading title={"LATEST VIDEOS"} />
        </Row>
        <br />
        <Row>
          {arr.map((item) => {
            return (
              <Col>
                <Banner />
              </Col>
            );
          })}
        </Row>
        <br />
        <br />
        <Row>
          {arr.map((item) => {
            return (
              <Col>
                <Banner />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };

  return (
    <>
      <Container>
        <br />
        <Row>
          <Col>
            <PosterBanner
              source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              title="The Big Bunny"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <TopVideos />
        </Row>
        <br />
        <Row>
          <FeaturedVideos />
        </Row>
        <br />
        <Row>
          <LatestVideos />
        </Row>
        <br />
        <br />
        <Row>
          <Heading title={"SHOW ALL VIDEOS"} onClick={onClick} />
        </Row>
      </Container>
    </>
  );
});

export default Home;
