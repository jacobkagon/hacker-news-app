import React, { useState } from "react";

import { useDispatch } from "react-redux";
import SearchAction from "../redux/actions/SearchAction";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOnChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(SearchAction(searchInput));

    fetch(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
      .then((resp) => resp.json())

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
