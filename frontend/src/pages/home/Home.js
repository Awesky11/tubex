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
import Banner from "./Banner";
import Heading from "./Heading";
import TopVideos from "./TopVideos";
import FeatureVideos from "./FeatureVideos";
import LatestVideos from "./LatestVideos";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Home = React.memo(() => {
  const store = useSelector((state) => state);


  const onClick = () => {
    history.push("/viewall");
    history.go();
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
          <FeatureVideos />
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
