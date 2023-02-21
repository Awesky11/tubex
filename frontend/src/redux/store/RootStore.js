// store.js
import { configureStore } from "@reduxjs/toolkit";

import { videosReducer } from "../slices/VideosSlice";

const store = configureStore({
  reducer: {
    videosStore: videosReducer,
  },
});

export default store;
