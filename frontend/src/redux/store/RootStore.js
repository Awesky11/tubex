// store.js
import { configureStore } from "@reduxjs/toolkit";

import { topReducer } from "../slices/TopSlice";
import { latestReducer } from "../slices/LatestSlice";
import { featureReducer } from "../slices/FeatureSlice";

const store = configureStore({
  reducer: {
    topStore: topReducer,
    latestStore: latestReducer,
    featureStore: featureReducer,
  },
});

export default store;
