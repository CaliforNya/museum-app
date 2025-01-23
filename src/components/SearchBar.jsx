import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search (e.g., Vermeer, 17th century, portraits)"
      />
      <button onClick={handleSearchClick} className="search-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
