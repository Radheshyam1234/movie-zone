export const MoviesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_MOVIES":
      return {
        ...state,
        moviesList: payload
      };
    case "SET_TOTAL_RESULTS":
      return {
        ...state,
        totalResults: payload
      };
    default:
      return { ...state };
  }
};
