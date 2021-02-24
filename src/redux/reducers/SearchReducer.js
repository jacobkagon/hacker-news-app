const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SEARCH_TERM":
      return [...state, action.term];
    default:
      return state;
  }
};

export default searchReducer;
