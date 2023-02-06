export default (state, action) => {
  const { type, response } = action.payload;
  //console.log(response);
  switch (type) {
    case "FETCH_DATA_SUCCESS":
      return { ...state, data: response, dataLoading: false };
    case "FETCH_DATA_ERROR":
      return { ...state, dataError: response, dataLoading: false };
    case "FETCH_DATA_LOADING":
      return { ...state, dataLoading: true };
    default:
      return state;
  }
};
