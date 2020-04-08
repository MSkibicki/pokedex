import React, { useState, useEffect } from "react";
import axios from "axios";

const SinglePokemon = ({ name, url }) => {
  // const [name, setName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetailData = async () => {
      const pokemonId = url.split("/")[url.split("/").length - 2];
      setLoading(true);
      const getSinglePokemon = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      
      setPokemonInfo(getSinglePokemon.data);
      setLoading(false)
    };

    getDetailData();
  }, [url]);

  // console.log(pokemonInfo);
  console.log(pokemonInfo.sprites);

  if(loading) return "Loading..."
  
  return (
    <div>
      <h1>{name}</h1>
      <p>Base experience: {pokemonInfo.base_experience}</p>
      <p>Height: {pokemonInfo.height}</p>
      <p>Weight: {pokemonInfo.weight}</p>
      <div className="pokemon-image">
          {/* <img src={pokemonInfo.sprites.front_default} alt="pokemon-front"/> */}
      </div>
    </div>
  );
};

export default SinglePokemon;
