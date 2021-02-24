const addSearchTerm = (term) => {
  return {
    type: "ADD_SEARCH_TERM",
    // term will be the payload
    term,
  };
};

export default addSearchTerm;
