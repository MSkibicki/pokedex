import React from "react";
import "../css/PokemonInfo.scss";
import PropTypes from "prop-types";

const PokemonInfo = ({ pokemonDetails }) => {
  const {
    pokemonName,
    pokemonId,
    pokemonFrontImg,
    pokemonHeight,
    pokemonWeight,
    pokemonExperience,
    pokemonStats,
    pokemonDescription,
    pokemonCatchRate,
    pokemonEggGroups,
    pokemonAbilities,
  } = pokemonDetails;

  return (
    <div className="pokemon-page">
      <div className="title">
        <h1 className="individual-name">
          {(pokemonName || 0) &&
            pokemonName
              .toLowerCase()
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
        </h1>
        <h1 className="pokemon-id">#{pokemonId}</h1>
      </div>
      <div className="base-info">
        <img
          className="individual-image"
          src={pokemonFrontImg}
          alt="pokemon-front"
        />
        <div className="info-group1">
          <div className="base-stats">
            <h3>Base stats:</h3>
            <p>Height: {pokemonHeight} meters</p>
            <p>Weight: {pokemonWeight} kilograms</p>
            <p>Base experience: {pokemonExperience} points</p>
          </div>
          <div className="additional-stats">
            <h3>Additional stats:</h3>
            <p>Speed: {(pokemonStats || 0) && pokemonStats.speed}</p>
            <p>
              Special-Defense:{" "}
              {(pokemonStats || 0) && pokemonStats.specialDefense}
            </p>
            <p>
              Special-Attack:{" "}
              {(pokemonStats || 0) && pokemonStats.specialAttack}
            </p>
            <p>Defense: {(pokemonStats || 0) && pokemonStats.defense}</p>
            <p>Attack: {(pokemonStats || 0) && pokemonStats.attack}</p>
            <p>HP: {(pokemonStats || 0) && pokemonStats.hp}</p>
          </div>
        </div>
      </div>
      <div className="info-groups">
        <div className="info-group2">
          <h3>{pokemonDescription}</h3>
        </div>
        <div className="info-group3">
          <p>
            <strong>Catch Rate: </strong>
            {pokemonCatchRate}%
          </p>
          <p>
            <strong>Egg Group: </strong>
            {pokemonEggGroups}
          </p>
          <p>
            <strong>Abilities: </strong>
            {pokemonAbilities}
          </p>
        </div>
      </div>
    </div>
  );
};

PokemonInfo.propTypes = {
  pokemonDetails: PropTypes.shape({
    pokemonName: PropTypes.string,
    pokemonId: PropTypes.string,
    pokemonFrontImg: PropTypes.string,
    pokemonHeight: PropTypes.number,
    pokemonWeight: PropTypes.number,
    pokemonExperience: PropTypes.number,
    pokemonStats: PropTypes.object,
    pokemonDescription: PropTypes.string,
    pokemonCatchRate: PropTypes.number,
    pokemonEggGroups: PropTypes.string,
    pokemonAbilities: PropTypes.array,
  }),
};

export default PokemonInfo;
