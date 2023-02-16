import axios from "axios";
import { topAction } from "../slices/TopSlice";
import { featureAction } from "../slices/FeatureSlice";
import { latestAction } from "../slices/LatestSlice";

const BASE_URL = "http://localhost:3000";

export const fetchTopVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/cat`);
      //console.log("HOME->", response);
      dispatch(
        topAction.fetchVideos({
          type: "SUCCESS",
          response: response.data,
        })
      );
    } catch (error) {
      dispatch(topAction.fetchVideos({ type: "ERROR", response: error }));
    }
  };
};

export const fetchFeatureVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/videos`);
      //console.log("ACTIONS- >", response);
      dispatch(
        featureAction.fetchVideos({
          type: "SUCCESS",
          response: response.data,
        })
      );
    } catch (error) {
      dispatch(
        featureAction.fetchVideos({
          type: "ERROR",
          response: error,
        })
      );
    }
  };
};

export const fetchLatestVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/videos`);
      //console.log("ACTIONS- >", response);
      dispatch(
        latestAction.fetchVideos({
          type: "SUCCESS",
          response: response.data,
        })
      );
    } catch (error) {
      dispatch(
        latestAction.fetchVideos({
          type: "ERROR",
          response: error,
        })
      );
    }
  };
};

// export const setCategoryData = (payload) => {
//   return async (dispatch) => {
//     try {
//       await axios
//         .post(`${BASE_URL}/api/cat`, payload)
//         .then((response) => {
//           console.log(response);
//           dispatch(
//             dataAction.fetchData({
//               type: "FETCH_DATA_SUCCESS",
//               response: response.data,
//             })
//           );
//         })
//         .catch((error) => {
//           console.log(error);
//           dispatch(
//             dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
//           );
//         });
//     } catch (error) {
//       dispatch(
//         dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
//       );
//     }
//   };
// };

// export const updateCategoryData = (payload, id) => {
//   return async (dispatch) => {
//     try {
//       await axios
//         .patch(`${BASE_URL}/api/cat/${id}`, payload)
//         .then((response) => {
//           console.log(response);
//           dispatch(
//             dataAction.fetchData({
//               type: "FETCH_DATA_SUCCESS",
//               response: response.data,
//             })
//           );
//         })
//         .catch((error) => {
//           console.log(error);
//           dispatch(
//             dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
//           );
//         });
//     } catch (error) {
//       dispatch(
//         dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
//       );
//     }
//   };
// };

// export const deleteCategoryData = (id) => {
//   return async (dispatch) => {
//     try {
//       await axios
//         .delete(`${BASE_URL}/api/cat/${id}`)
//         .then((response) => {
//           console.log(response);
//           dispatch(
//             dataAction.fetchData({
//               type: "FETCH_DATA_SUCCESS",
//               response: response.data,
//             })
//           );
//         })
//         .catch((error) => {
//           console.log(error);
//           dispatch(
//             dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
//           );
//         });
//     } catch (error) {
//       dispatch(
//         dataAction.fetchData({ type: "FETCH_DATA_ERROR", response: error })
//       );
//     }
//   };
// };
