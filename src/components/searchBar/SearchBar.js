import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="my-auto d-flex justify-content-between pe-2">
      <input
        type="text"
        name="searchContent"
        id="searchContent"
        placeholder="Webtekno'da arama yapın..."
        className="searchBar ms-2 my-auto"
      />
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
  );
}

export default SearchBar;
