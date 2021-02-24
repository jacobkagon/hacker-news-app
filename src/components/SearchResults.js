import React from "react";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      {searchResults?.map((result) => {
        return <div>{result.title}</div>;
      })}
    </div>
  );
};

export default SearchResults;
