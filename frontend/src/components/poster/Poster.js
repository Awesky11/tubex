import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Poster.css";
import Play from "../../assets/svgs/play.svg";

const Poster = React.memo(({ movie }) => {

  return (
    <div className="poster-card">
      <img className="poster-card-img" src={movie.thumb} alt={movie.title} />

      <Link
        to="/media"
        state={{ data: movie }}
        className="poster-card-play-icon-holder"
      >
        <div>
          <img className="poster-card-play-icon" src={Play} />
        </div>
      </Link>
    </div>
  );
});

export default Poster;
