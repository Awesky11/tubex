import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { PosterBanner } from "../../components/poster/Poster";
import Banner from "./Banner";
import Heading from "./Heading";

const Home = React.memo(() => {
  const categories = [
    { title: "TOP VIDEOS", slug: "top" },
    { title: "FEATURED", slug: "featured" },
    { title: "LATEST HITS", slug: "latest" },
    { title: "OTHERS", slug: "others" },
  ];

  const store = useSelector((state) => state);
  const videoList = store.videosStore.videos;
  //console.log("HOME -> ", videoList);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/viewall");
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
        <>
          {categories.map((category, index) => (
            <Container key={index}>
              <br />
              <br />
              <Row>
                <Heading title={category.title} />
              </Row>
              <br />
              <Row className="top-video-grid">
                {videoList
                  .filter((video) =>
                    video.category
                      .toLowerCase()
                      .includes(category.slug.toLowerCase())
                  )
                  .map((item, index) => {
                    return (
                      <Col key={index}>
                        <Banner item={item} />
                      </Col>
                    );
                  })}
              </Row>
            </Container>
          ))}
        </>
        <br />
        <Row>
          <Heading title={"SHOW ALL VIDEOS"} onClick={onClick} />
        </Row>
      </Container>
    </>
  );
});

export default Home;
