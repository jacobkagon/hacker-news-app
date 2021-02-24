//initalize state with an empty array
const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SEARCH_TERM":
      //add the newest search term to the array of terms
      return [...state, action.term];

    default:
      return state;
  }
};

export default searchReducer;
