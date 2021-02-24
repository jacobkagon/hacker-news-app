import "../search.css";

const Search = ({ handleOnChange, handleSubmit }) => {
  return (
    <div id="search-bar">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          id="input"
          type="text"
          placeholder="Search Hacker News"
          onChange={(event) => handleOnChange(event)}
        />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
};

export default Search;
