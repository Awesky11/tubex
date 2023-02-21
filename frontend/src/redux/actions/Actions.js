import axios from "axios";
import { videosAction } from "../slices/VideosSlice";

const BASE_URL = "http://localhost:3000";

export const fetchVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/videos`);
      //console.log("fetchVideos->", response);
      dispatch(
        videosAction.fetchVideos({
          type: "SUCCESS",
          response: response.data,
        })
      );
    } catch (error) {
      dispatch(videosAction.fetchVideos({ type: "ERROR", response: error }));
    }
  };
};
