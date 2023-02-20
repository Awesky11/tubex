import { useState } from "react";
import { useUploadContext } from "./useUploadContext";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

export const useVideoUpload = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useUploadContext();

  const uploadVideo = async (formData, slug) => {
    function isImgLink(url) {
      if (typeof url !== "string") return false;
      return !!url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
    }

    function isVideoLink(url) {
      if (url.endsWith(".mp4")) {
        return true;
      }
    }

    if (formData.title == "") {
      setLoading(false);
      setError("Video title required!");
      return;
    } else if (formData.subtitle == "") {
      setLoading(false);
      setError("Video sub-title required!");
      return;
    } else if (formData.thumb == "") {
      setLoading(false);
      setError("Video thumbnail required!");
      return;
    } else if (formData.source == "") {
      setLoading(false);
      setError("Video source url required!");
      return;
    } else if (slug == "" || undefined) {
      setLoading(false);
      setError("Choose a category!");
      return;
    } else if (formData.description == "") {
      setLoading(false);
      setError("Video description required!");
      return;
    } else if (!isImgLink(formData.thumb)) {
      setLoading(false);
      setError("Video thumbnail is invalid!");
      return;
    } else if (!isVideoLink(formData.source)) {
      setLoading(false);
      setError("Video source url must be mp4!");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios({
        method: "PATCH",
        url: `${BASE_URL}/api/cat/${slug}`,
        headers: {
          "Content-Type": "application/json",
          //Authorization: "Bearer " + token,
        },
        data: JSON.stringify({ data: formData }),
      });

      if (response.statusText == "OK") {
        dispatch({ type: "SET_VIDEO", response: response.data });
        setLoading(false);
        return response;
      } else if (response.statusText != "OK") {
        setLoading(false);
        setError(response.data.error);
      }
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
    }
  };

  return { uploadVideo, isLoading, error };
};
