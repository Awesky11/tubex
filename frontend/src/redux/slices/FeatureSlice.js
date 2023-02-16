import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feature: [],
  featureError: null,
  featureLoading: true,
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    fetchVideos: (state, action) => {
      const { type, response } = action.payload;
      //console.log(response);
      switch (type) {
        case "SUCCESS":
          return { ...state, feature: response, featureLoading: false };
        case "ERROR":
          return { ...state, featureError: response, featureLoading: false };
        case "LOADING":
          return { ...state, featureLoading: true };
        default:
          return state;
      }
    },
  },
});

export const { actions: featureAction, reducer: featureReducer } = featureSlice;
