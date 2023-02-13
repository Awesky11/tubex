import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Poster.css";
import Play from "../../assets/svgs/play.svg";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export const PosterMain = React.memo(({ movie }) => {
  return (
    <Container style={{ minWidth: "auto", height: "auto" }}>
      <Row>
        <Col>
          <Ratio aspectRatio="16x9">
            <div>
              <img className="poster-card-img" src={movie.thumb} />

              <Link
                to="/media"
                state={{
                  data: movie,
                }}
                className="poster-card-play-icon-holder"
              >
                <div>
                  <img className="poster-card-play-icon" src={Play} />
                </div>
              </Link>
            </div>
          </Ratio>
        </Col>
      </Row>
    </Container>
  );
});

export const PosterBanner = ({ source, url, title }) => {
  return (
    <Container style={{ minWidth: "auto", height: "auto" }}>
      <Row>
        <Col>
          <Ratio aspectRatio="16x9">
            <div>
              <img className="poster-card-img" src={source} />

              <Link
                to="/media"
                state={{
                  data: url,
                }}
                className="poster-card-play-icon-banner"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img className="poster-card-play-icon" src={Play} />
                  <span style={{ color: "white" }}>{title}</span>
                </div>
              </Link>
            </div>
          </Ratio>
        </Col>
      </Row>
    </Container>
  );
};
