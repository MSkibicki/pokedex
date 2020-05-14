import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import PokemonInfo from "./PokemonInfo";
import Button from "./Button";
import Loading from "./Loading";

const SinglePokemonDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({
    pokemonName: "",
    pokemonFrontImg: "",
    pokemonStats: {
      speed: "",
      specialDefense: "",
      specialAttack: "",
      defense: "",
      attack: "",
      hp: "",
    },
    pokemonAbilities: "",
    pokemonDescription: "",
    pokemonHeight: "",
    pokemonWeight: "",
    pokemonEggGroups: "",
    pokemonCatchRate: "",
    pokemonId: "",
    pokemonExperience: "",
  });

  useEffect(() => {
    let isCancelled = false;
    const { pokemonId } = props.match.params;

    const getSinglePokemonData = async () => {
      const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;

      setLoading(true);

      try {
        const result = await axios(detailsUrl);
        const pokemonName = result.data.name;
        const pokemonFrontImg = result.data.sprites.front_default;
        const pokemonAbilities = result.data.abilities.map((ability) => {
          return ability.ability.name
            .toLowerCase()
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        });
        const pokemonHeight = result.data.height / 10;
        const pokemonWeight = result.data.weight / 10;
        const pokemonExperience = result.data.base_experience;

        let { speed, specialDefense, specialAttack, defense, attack, hp } = "";

        result.data.stats.forEach((stat) => {
          switch (stat.stat.name) {
            case "speed":
              speed = stat["base_stat"];
              break;
            case "special-defense":
              specialDefense = stat["base_stat"];
              break;
            case "special-attack":
              specialAttack = stat["base_stat"];
              break;
            case "defense":
              defense = stat["base_stat"];
              break;
            case "attack":
              attack = stat["base_stat"];
              break;
            case "hp":
              hp = stat["base_stat"];
              break;
            default:
              console.log("No stats data available.");
          }
        });

        const speciesResult = await axios(speciesUrl);

        speciesResult.data.flavor_text_entries.some((flavor) => {
          if (flavor.language.name === "en") {
            setPokemonDetails({ pokemonDescription: flavor.flavor_text });
            return null;
          } else {
            return console.log("text not found");
          }
        });

        const pokemonEggGroups = speciesResult.data["egg_groups"]
          .map((group) => {
            return group.name
              .toLowerCase()
              .split("")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
          })
          .join(", ");

        const pokemonCatchRate = Math.round(
          (100 / 255) * speciesResult.data["capture_rate"]
        );

        if (!isCancelled) {
          setLoading(false);
          setPokemonDetails({
            pokemonName,
            pokemonFrontImg,
            pokemonAbilities,
            pokemonHeight,
            pokemonWeight,
            pokemonExperience,
            pokemonEggGroups,
            pokemonCatchRate,
            pokemonStats: {
              speed,
              specialDefense,
              specialAttack,
              defense,
              attack,
              hp,
            },
            pokemonId,
          });
        }
      } catch (e) {
        if (!isCancelled) {
          console.error(e);
        }
      }
    };
    getSinglePokemonData();

    return () => {
      isCancelled = true;
    };
  }, [props.match.params]);

  if (loading)
    return (
      <Loading />
    );

  return (
    <>
      <Navbar />
      <PokemonInfo pokemonDetails={pokemonDetails} />
      <Button text="Back to main page" />
    </>
  );
};

export default SinglePokemonDetails;
