import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  latest: [],
  latestError: null,
  latestLoading: true,
};

const latestSlice = createSlice({
  name: "latest",
  initialState,
  reducers: {
    fetchVideos: (state, action) => {
        const { type, response } = action.payload;
        //console.log(response);
        switch (type) {
          case "SUCCESS":
            return { ...state, latest: response, latestLoading: false };
          case "ERROR":
            return { ...state, latestError: response, latestLoading: false };
          case "LOADING":
            return { ...state, latestLoading: true };
          default:
            return state;
        }
      },
  },
});

export const { actions: latestAction, reducer: latestReducer } = latestSlice;
