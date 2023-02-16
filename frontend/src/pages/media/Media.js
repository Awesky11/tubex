import React, { useReducer } from "react";
import "./Media.css";
import { useLocation } from "react-router-dom";
import Player from "../../components/player/Player";
import {PosterMain} from "../../components/poster/Poster";

import { useSelector } from "react-redux";

const Media = (props) => {
  const store = useSelector((state) => state);

  const videos = []

  const location = useLocation();
  const data = location?.state?.data;

  return (
    <div className="media-container">
      <div className="media-container-player">
        <div>
          <div>
            <Player movie={data} />
          </div>
          <div className="media-poster-row">
            {videos.map((movie, j) => (
              <div key={j}>
                <div className="media-poster-row-item">
                  <PosterMain movie={movie} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="media-container-player-list">
        {videos.map((movie, j) => (
          <div key={j}>
            <div className="media-poster">
              <Poster movie={movie} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Media;
