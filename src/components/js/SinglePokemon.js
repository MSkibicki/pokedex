import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePokemon = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    let isCancelled = false;
    const getDetailData = async () => {
      const pokemonId = url.split("/")[url.split("/").length - 2];
      setLoading(true);

      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (!isCancelled) {
          setPokemonInfo(result.data);
          setLoading(false);
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

  if (loading) return "Loading...";

  const { base_experience, height, weight } = pokemonInfo;

  return (
    <div>
      <Link to={`singlePokemonDetails/${pokemonId}`}>
        {(pokemonInfo || 0) &&
          (pokemonInfo.sprites || 0) &&
          (pokemonInfo.sprites.back_default || 0) && (
            <img
              src={pokemonInfo.sprites.front_default}
              alt="pokemon-front"
              className="pokemon-image"
            />
          )}
        <p>#{pokemonId}</p>
        <h1>
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
      </Link>
    </div>
  );
};

export default SinglePokemon;
