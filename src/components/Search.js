import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "../search.css";

//redux
import { useDispatch } from "react-redux";
import SearchAction from "../redux/actions/SearchAction";

const Search = () => {
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
    document.getElementsByTagName("form")[0].reset();
    setSearchInput("");
  };

  return (
    <div id="search-bar">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          id="input"
          type="text"
          placeholder="search.."
          onChange={(event) => handleOnChange(event)}
        />
        <input id="submit" type="submit" />
      </form>
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
