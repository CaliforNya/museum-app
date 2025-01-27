import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  items,
}) => {
  return (
    <div className="pagination">
      <input
        type="button"
        value="Previous"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="pagination-input"
      />

      <span>{currentPage}</span>

      <input
        type="button"
        value="Next"
        onClick={handleNextPage}
        disabled={items.length < 10}
        className="pagination-input"
      />
    </div>
  );
};

export default Pagination;
