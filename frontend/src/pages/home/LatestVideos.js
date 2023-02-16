

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./Banner";
import Heading from "./Heading";

const LatestVideos = ({ arr = [1, 2, 3, 4] }) => {
  return (
    <Container>
      <Row>
        <Heading title={"LATEST HITS"} />
      </Row>
      <br />
      <Row className="latest-video-grid">
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

export default LatestVideos;
