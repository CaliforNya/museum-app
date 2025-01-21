import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ArtCard from "./components/ArtCard";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.rijksmuseum.nl/api/en/collection`,
        {
          params: {
            key: "4CfugrPs",
            q: searchTerm,
            imgonly: true,
          },
        }
      );

      console.log("Odpowiedź z API:", response.data);

      if (response.data.artObjects.length > 0) {
        setItems(response.data.artObjects);
      } else {
        setError("No results");
      }
    } catch (err) {
      console.error("Error", err.message);
      setError("Process unsuccsessed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Searching for results... </p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {items.map((item) => (
          <ArtCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
