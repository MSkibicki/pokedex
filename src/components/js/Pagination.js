import React from "react";
import "../css/Pagination.scss";
import PropTypes from "prop-types";

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

Pagination.propTypes = {
  handlePreviousPage: PropTypes.func,
  handleNextPage: PropTypes.func,
};

export default Pagination;
