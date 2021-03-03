import React from "react";
import "../results.css";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      {searchResults?.map((result, index) => {
        return (
          <div key={index}>
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
