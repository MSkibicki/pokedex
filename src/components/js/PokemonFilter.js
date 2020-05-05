import React from "react";
import "../css/PokemonFilter.scss";
import PropTypes from "prop-types";

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

PokemonFilter.propTypes = {
  handleInput: PropTypes.func,
};

export default PokemonFilter;
