import React from "react";
import { PosterMain } from "../../components/poster/Poster";
import "./ViewAll.css";

import Shimmer from "../../components/shimmer/Shimmer";
import { useSelector } from "react-redux";

const ViewAll = () => {
  const store = useSelector((state) => state);

  const dataLoading = true;
  const dataError = true;

  const videos = [];
  const data = [];
  data.map((item) => {
    videos.push(item.data);
  });

  if (dataLoading || dataError)
    return <Shimmer imageWidth={200} imageHeight={150} />;

  return (
    <div className="home-poster-row">
      {videos.flat().map((movie, j) => (
        <div key={j}>
          <div className="home-poster-row-item">
            <PosterMain movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
