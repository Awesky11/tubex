// store.js
import { configureStore } from "@reduxjs/toolkit";

import { dataReducer } from "./DataSlice";
import { videoReducer } from "./VideosSlice";

const store = configureStore({
  reducer: {
    dataStore: dataReducer,
    videosStore: videoReducer,
  },
});

export default store;
