import React from "react";

import "./Pagination.css";

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    totalPages > 500 ? setCurrentPage(500) : setCurrentPage(totalPages);
  };

  const goToPreviousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    currentPage < 500 && setCurrentPage(currentPage + 1);
  }
  return (
    <div className="pagination">
      <button onClick={goToFirstPage}>first</button>
      {currentPage > 1 && (
        <button onClick={goToPreviousPage}>{currentPage - 1}</button>
      )}

      <button>{currentPage}</button>
      
      {currentPage < 500 && (
        <button onClick={goToNextPage}>next</button>
      )} 
      <button onClick={goToLastPage}>last</button>
    </div>
  );
};

export default Pagination;
