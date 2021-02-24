import React, { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import SearchAction from "../redux/actions/SearchAction";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const SearchContainer = () => {
  //use the useDispatch hook to dispatch an action
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOnChange = (event) => {
    //Updates state on input change
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch an action taking in the search input as an argument

    dispatch(SearchAction(searchInput));
    //make fetch request to hacker news
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
      .then((resp) => resp.json())
      //set searchResults array with the data collected from the fetch
      .then((data) => setSearchResults(data.hits));
  };
  return (
    <div>
      <SearchBar handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default SearchContainer;
