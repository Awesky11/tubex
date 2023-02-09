export default (state, action) => {
    const { type, response } = action.payload;
    //console.log(response);
    switch (type) {
      case "FETCH_POPULAR_VIDEOS_SUCCESS":
        return { ...state, videos: response, loading: false };
      case "FETCH_VIDEOS_ERROR":
        return { ...state, error: response, loading: false };
      case "FETCH_VIDEOS_LOADING":
        return { ...state, loading: true };
      default:
        return state;
    }
  };
  