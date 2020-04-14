import React from "react";
import "../css/Pagination.scss";

const Pagination = ({ handlePreviousPage, handleNextPage }) => {
  return (
    <div className="buttons">
      {handlePreviousPage && (
        <button className="button-previous" onClick={handlePreviousPage}>
          Previous Page
        </button>
      )}
      {handleNextPage && (
        <button className="button-next" onClick={handleNextPage}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
