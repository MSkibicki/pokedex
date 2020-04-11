import React from "react";

const Pagination = ({ handlePreviousPage, handleNextPage }) => {
  return (
    <div>
      {handlePreviousPage && <button onClick={handlePreviousPage}>Previous Page</button>}
      {handleNextPage && <button onClick={handleNextPage}>Next Page</button>}
    </div>
  );
};

export default Pagination;
