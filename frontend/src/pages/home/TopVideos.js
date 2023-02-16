import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./Banner";
import Heading from "./Heading";

const TopVideos = ({
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
}) => {
  return (
    <Container>
      <Row>
        <Heading title={"TOP VIDEOS"} />
      </Row>
      <br />
      <Row className="top-video-grid">
        {arr.map((item, index) => {
          return (
            <Col key={index}>
              <Banner />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default TopVideos;
