import { createSlice } from "@reduxjs/toolkit";

import reducer from "./DataReducer";

const initialState = {
  data: [],
  dataError: null,
  dataLoading: true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchData: reducer,
  },
});

export const { actions: dataAction, reducer: dataReducer } = dataSlice;

