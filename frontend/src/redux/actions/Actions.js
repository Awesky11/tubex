import axios from "axios";
import { dataAction } from "../slices/DataSlice";
import { videosAction } from "../slices/VideosSlice";

const BASE_URL = "http://localhost:3000";

export const fetchCategoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/cat`);
      //console.log("HOME->", response);
      dispatch(
        dataAction.fetchData({
          type: "FETCH_DATA_SUCCESS",
          response: response.data,
        })
      );
    } catch (error) {
      dispatch(
        dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
      );
    }
  };
};

export const setCategoryData = (payload) => {
  return async (dispatch) => {
    try {
      await axios
        .post(`${BASE_URL}/api/cat`, payload)
        .then((response) => {
          console.log(response);
          dispatch(
            dataAction.fetchData({
              type: "FETCH_DATA_SUCCESS",
              response: response.data,
            })
          );
        })
        .catch((error) => {
          console.log(error);
          dispatch(
            dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
          );
        });
    } catch (error) {
      dispatch(
        dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
      );
    }
  };
};

export const updateCategoryData = (payload, id) => {
  return async (dispatch) => {
    try {
      await axios
        .patch(`${BASE_URL}/api/cat/${id}`, payload)
        .then((response) => {
          console.log(response);
          dispatch(
            dataAction.fetchData({
              type: "FETCH_DATA_SUCCESS",
              response: response.data,
            })
          );
        })
        .catch((error) => {
          console.log(error);
          dispatch(
            dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
          );
        });
    } catch (error) {
      dispatch(
        dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
      );
    }
  };
};

export const deleteCategoryData = (id) => {
  return async (dispatch) => {
    try {
      await axios
        .delete(`${BASE_URL}/api/cat/${id}`)
        .then((response) => {
          console.log(response);
          dispatch(
            dataAction.fetchData({
              type: "FETCH_DATA_SUCCESS",
              response: response.data,
            })
          );
        })
        .catch((error) => {
          console.log(error);
          dispatch(
            dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
          );
        });
    } catch (error) {
      dispatch(
        dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
      );
    }
  };
};

//Popular videos

export const fetchPopularVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/videos`);
      //console.log("ACTIONS- >", response);
      dispatch(
        videosAction.fetchVideos({
          type: "FETCH_POPULAR_VIDEOS_SUCCESS",
          response: response.data,
        })
      );
    } catch (error) {
      dispatch(
        videosAction.fetchVideos({
          type: "FETCH_VIDEOS_ERROR",
          response: error,
        })
      );
    }
  };
};
