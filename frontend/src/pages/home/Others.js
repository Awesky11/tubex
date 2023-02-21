

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./Banner";
import Heading from "./Heading";

const Others = ({ videos }) => {
  return (
    <Container>
      <Row>
        <Heading title={"LATEST HITS"} />
      </Row>
      <br />
      <Row className="latest-video-grid">
        {videos.map((item, index) => {
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

export default Others;
