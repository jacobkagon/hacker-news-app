import React from "react";
import "../results.css";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      {searchResults?.map((result, id) => {
        return (
          <div key={id}>
            <a href={result.url}>
              <div id="results">{result.title}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
