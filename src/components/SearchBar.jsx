import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    onSearch(input);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search (e.g., Vermeer, 17th century, portraits)"
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <button
        onClick={handleSearchClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Szukaj
      </button>
    </div>
  );
};

export default SearchBar;
