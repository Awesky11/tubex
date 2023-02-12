import React, { useState } from "react";
import "./MovieCards.css";
import Poster from "../poster/Poster";
import Shimmer from "../shimmer/Shimmer";

const MovieCards = ({ movies, loading, error }) => {
  if (loading || error) return <Shimmer imageWidth={330} imageHeight={200} />;
  return (
    <div>
      {movies.map((item, i) => (
        <div key={i}>
          {item.data.length > 0 && (
            <>
              <h3 className="movie-card-heading">{item.label}</h3>
              <div className="movie-cards-container">
                {item.data.map((movie, j) => (
                  <div key={j}>
                    <div className="movie-card-poster">
                      <Poster movie={movie} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
