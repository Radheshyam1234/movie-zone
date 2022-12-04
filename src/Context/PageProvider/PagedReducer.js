export const PagedReducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREASE_PAGE_NUM":
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    case "DECREASE_PAGE_NUM":
      return {
        ...state,
        currentPage: state.currentPage - 1
      };
    case "RESET_PAGE_NUM":
      return {
        ...state,
        currentPage: 1
      };
    default:
      return state;
  }
};
