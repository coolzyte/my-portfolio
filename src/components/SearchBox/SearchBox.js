import React from "react";
import "./SearchBox.scss";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="SearchBox">
      <input
        className="SearchBox__input"
        type="search"
        placeholder="search apps"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
