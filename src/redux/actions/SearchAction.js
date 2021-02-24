const addSearchTerm = (term) => {
  return {
    type: "ADD_SEARCH_TERM",
    term,
  };
};

export default addSearchTerm;
