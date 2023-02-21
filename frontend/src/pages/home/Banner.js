import { useState } from "react";
import Container from "react-bootstrap/Container";

import Ratio from "react-bootstrap/Ratio";
import Play from "../../assets/svgs/play.svg";
import { Link } from "react-router-dom";

const Banner = ({ item }) => {
  const [showPlay, setShowPlay] = useState(true);
  const { source, thumb } = item;

  const mouseOver = (e) => {
    e.currentTarget.src = source;
    setShowPlay(false);
  };
  const mouseOut = (e) => {
    e.currentTarget.src = thumb;
    setShowPlay(true);
  };

  return (
    <Container>
      <Ratio aspectRatio="16x9">
        <div>
          <img
            className="home-banner-card-img"
            src={thumb}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />

          <Link
            to="/media"
            state={{
              data: source,
            }}
            className="home-banner-card-play-icon-holder"
          >
            {showPlay && (
              <div>
                <img className="home-banner-card-play-icon" src={Play} />
              </div>
            )}
          </Link>
        </div>
      </Ratio>
    </Container>
  );
};

export default Banner;
