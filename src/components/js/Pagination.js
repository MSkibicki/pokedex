import React from "react";

import Button from "react-bootstrap/Button";

const Pagination = ({ handlePreviousPage, handleNextPage }) => {
  return (
    <div>
      {handlePreviousPage && (
        <Button onClick={handlePreviousPage} variant="info">
          Previous Page
        </Button>
      )}
      {handleNextPage && (
        <Button onClick={handleNextPage} variant="info">
          Next Page
        </Button>
      )}
    </div>
  );
};

export default Pagination;
