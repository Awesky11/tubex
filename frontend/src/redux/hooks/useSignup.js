import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/api/auth/signup`,
        headers: {
          "Content-Type": "application/json",
          //Authorization: "Bearer " + token,
        },
        data: JSON.stringify(formData),
      });

      if (response.statusText == "OK") {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "SIGNUP", response: response.data });
        setLoading(false);
      } else if (response.statusText != "OK") {
        setLoading(false);
        setError(response.data.error);
      }
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
    }
  };

  return { signup, isLoading, error };
};
