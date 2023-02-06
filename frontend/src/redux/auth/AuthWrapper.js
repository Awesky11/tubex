import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const AuthWrapper = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("AuthWrapper must be inside AuthContextProvider!");
  }

  return context;
};
