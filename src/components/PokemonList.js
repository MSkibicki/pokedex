import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePokemon from "./SinglePokemon";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon`);

      setLoading(false);

      setPokemons(result.data["results"]);
    };

    getData();
  }, []);

  
  if (loading) return "Loading...";

  return (
    <>
      {pokemons.map((pokemon) => (
        <SinglePokemon
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </>
  );
};

export default App;
