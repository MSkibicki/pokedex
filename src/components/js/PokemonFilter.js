import React from "react";
import "../css/PokemonFilter.scss";

const PokemonFilter = ({ handleInput }) => {
  return (
    <div className="filter">
      <label htmlFor="pokemon-filter">Filter pokemon by name.</label>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="Start typing pokemon name."
        onChange={handleInput}
        className="input"
      />
    </div>
  );
};

export default PokemonFilter;
