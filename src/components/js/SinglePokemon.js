import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/SinglePokemon.scss";
import PropTypes from "prop-types";

const SinglePokemon = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    let isCancelled = false;
    const getDetailData = async () => {
      const pokemonId = url.split("/")[url.split("/").length - 2];

      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (!isCancelled) {
          setPokemonInfo(result.data);
          setPokemonId(pokemonId);
        }
      } catch (e) {
        if (!isCancelled) {
          console.error(e);
        }
      }
    };

    getDetailData();

    return () => {
      isCancelled = true;
    };
  }, [url]);

  const { base_experience, height, weight } = pokemonInfo;

  return (
    <Link className="pokemon-link" to={`singlePokemonDetails/${pokemonId}`}>
      <div className="single-pokemon">
        <h3 className="pokemon-number">#{pokemonId}</h3>
        {(pokemonInfo || 0) &&
          (pokemonInfo.sprites || 0) &&
          (pokemonInfo.sprites.back_default || 0) && (
            <img
              src={pokemonInfo.sprites.front_default}
              alt="pokemon-front"
              className="pokemon-image"
            />
          )}
        <h1 className="pokemon-name">
          {name
            .toLowerCase()
            .split(" ")
            .map(
              (pokemonName) =>
                pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)
            )
            .join("")}
        </h1>
        <p>Base experience: {base_experience} points</p>
        <p>Height: {height / 10} meters</p>
        <p>Weight: {weight / 10} kilograms</p>
      </div>
    </Link>
  );
};

SinglePokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default SinglePokemon;
