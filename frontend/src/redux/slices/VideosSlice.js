import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  videosError: null,
  videosLoading: true,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    fetchVideos: (state, action) => {
      const { type, response } = action.payload;
      switch (type) {
        case "SUCCESS":
          return { ...state, videos: response, videosLoading: false };
        case "ERROR":
          return { ...state, videosError: response, videosLoading: false };
        case "LOADING":
          return { ...state, videosLoading: true };
        default:
          return state;
      }
    },
  },
});

export const { actions: videosAction, reducer: videosReducer } = videosSlice;
