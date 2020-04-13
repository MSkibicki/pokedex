import React, { useState, useEffect } from "react";
import axios from "axios";

const SinglePokemon = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    const getDetailData = async () => {
      const pokemonId = url.split("/")[url.split("/").length - 2];

      let token;
      setLoading(true);
      const getSinglePokemon = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        {
          cancelToken: new axios.CancelToken((c) => (token = c)),
        }
      );

      setPokemonInfo(getSinglePokemon.data);
      setLoading(false);
      setPokemonId(pokemonId);

      return () => token.cancel();
    };

    getDetailData();
  }, [url]);

  if (loading) return "Loading...";

  const { base_experience, height, weight } = pokemonInfo;

  return (
    <div>
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
      <p>{name}</p>
      <p>Base experience: {base_experience}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  );
};

export default SinglePokemon;
