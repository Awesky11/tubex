import React, { useEffect } from "react";
import { createContext, useReducer } from "react";

export const UploadContext = createContext();

export const uploadReducer = (state, action) => {
  const { type, response } = action;
  switch (type) {
    case "SET_VIDEO":
      return { data: response };

    case "CREATE_VIDEO":
      return { data: [response, ...state.data] };

    case "DELETE_VIDEO":
      return { data: state.data.filter((w) => w._id !== response._id) };

    default:
      return state;
  }
};

export const UploadContextProvider = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(uploadReducer, {
    data: null,
  });

  console.log("Upload Video state: ", state);

  return (
    <UploadContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UploadContext.Provider>
  );
});
