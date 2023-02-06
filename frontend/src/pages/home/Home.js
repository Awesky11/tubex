import React from "react";
import "./Home.css";
//import Banner from "../../components/banner/Banner";
// import { banners, videos } from "../../movies";
import MovieCards from "../../components/card/MovieCards";
import { useSelector } from "react-redux";


import VideoCards from "../../components/card/VideoCards";
     

const Home = React.memo(() => {
  const store = useSelector((state) => state);

  const {
    videosStore: { videos, error, loading },
    dataStore: { data, dataError, dataLoading },
  } = store;

  return (
    <>
      <VideoCards videos={videos} error={error} loading={loading} />
      <MovieCards movies={data} error={dataError} loading={dataLoading} />
    </>
  );
});

export default Home;
