import Container from "react-bootstrap/Container";

import Ratio from "react-bootstrap/Ratio";
import Play from "../../assets/svgs/play.svg";
import { Link } from "react-router-dom";

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

export default Banner;
