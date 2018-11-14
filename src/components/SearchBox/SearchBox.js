import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <input
        className="SearchBox__input"
        type="search"
        placeholder="search apps"
      />
    </div>
  );
};

export default SearchBox;
