import { createSlice } from "@reduxjs/toolkit";

import reducer from "../reducers/VideoReducer";

const initialState = {
  videos: [],
  error: null,
  loading: true,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    fetchVideos: reducer,
  },
});

export const { actions: videosAction, reducer: videoReducer } = videosSlice;
