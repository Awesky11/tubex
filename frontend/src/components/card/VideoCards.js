import React from "react";
import "./MovieCards";
import {PosterMain} from "../poster/Poster";
import Shimmer from "../shimmer/Shimmer";

const VideoCards = ({ videos, error, loading }) => {
  if (loading || error) return <Shimmer imageWidth={200} imageHeight={150} />;
  return (
    <>
      {/* <Banner banners={banners} /> */}
      <h3 className="movie-card-heading">{"Popular"}</h3>
      <div className="home-poster-row">
        {videos.map((movie, j) => (
          <div key={j}>
            <div className="home-poster-row-item">
              <PosterMain movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCards;
