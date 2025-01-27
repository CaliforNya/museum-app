import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ArtCard from "./components/ArtCard";
import "./App.css";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchItems = async () => {
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
              ps: 10,
              p: currentPage,
            },
          }
        );

        console.log("answerAPI:", response.data);

        if (response.data.artObjects.length > 0) {
          setItems(response.data.artObjects);
        } else {
          setItems([]);
          setError("No results");
        }
      } catch (err) {
        console.error("Error", err.message);
        setError("Process unsuccessful");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [searchTerm, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <NavBar />

      <SearchBar onSearch={handleSearch} />
      {loading && <p>Searching for results... </p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="card-container">
        {items.map((item) => (
          <ArtCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        items={items}
      />
      <Footer />
    </div>
  );
};

export default App;
