import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./Banner";
import Heading from "./Heading";

const FeatureVideos = ({ arr = [1, 2, 3, 4, 5, 6] }) => {
  return (
    <Container>
      <Row>
        <Heading title={"FEATURED"} />
      </Row>
      <br />
      <Row className="feature-video-grid">
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

export default FeatureVideos;
