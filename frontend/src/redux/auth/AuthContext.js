import React, { useEffect } from "react";
import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  const { type, response } = action;
  switch (type) {
    case "SIGNUP":
      return { user: response };

    case "LOGIN":
      return { user: response };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", response: user });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
});
