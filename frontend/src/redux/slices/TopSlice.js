import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  top: [],
  topError: null,
  topLoading: true,
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    fetchVideos: (state, action) => {
      const { type, response } = action.payload;
      switch (type) {
        case "TOP_SUCCESS":
          return { ...state, top: response, topLoading: false };
        case "TOP_ERROR":
          return { ...state, topError: response, topLoading: false };
        case "TOP_LOADING":
          return { ...state, topLoading: true };
        default:
          return state;
      }
    },
  },
});

export const { actions: topAction, reducer: topReducer } = topSlice;

