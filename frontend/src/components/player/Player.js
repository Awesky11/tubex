import React, { useState, useEffect, useRef } from "react";
import "./Player.css";

const Player = React.memo(({ movie }) => {
  const videoRef = useRef(null);

  //console.log("MEDIA ->", movie);

  useEffect(() => {

  }, []);

  return (
    <div className="player-container">
      <video
        className="player-main"
        ref={videoRef}
        controls
        autoPlay={false}
        muted
        poster={movie.thumb}
        src={movie.source}
        type="video/mp4"
        onPlay={() => videoRef.current.play()}
        onAbort={()=> videoRef.current.play()}
      ></video>
    </div>
  );
});

export default Player;
