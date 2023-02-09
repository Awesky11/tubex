// store.js
import { configureStore } from "@reduxjs/toolkit";

import { dataReducer } from "../slices/DataSlice";
import { videoReducer } from "../slices/VideosSlice";

const store = configureStore({
  reducer: {
    dataStore: dataReducer,
    videosStore: videoReducer,
  },
});

export default store;
