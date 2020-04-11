import React from "react";

const PokemonFilter = ({ handleInput }) => {
  return (
    <div>
      <label htmlFor="pokemon-filter">Filter pokemon by name.</label>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="Start typing pokemon name."
        onChange={handleInput}
      />
    </div>
  );
};

export default PokemonFilter;
