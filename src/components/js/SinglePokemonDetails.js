import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../css/SinglePokemonDetails.scss";

const SinglePokemonDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonFrontImg, setPokemonFrontImg] = useState("");
  const [pokemonStats, setPokemonStats] = useState({
    speed: "",
    specialDefense: "",
    specialAttack: "",
    defense: "",
    attack: "",
    hp: "",
  });
  const [pokemonAbilities, setPokemonAbilities] = useState("");
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [pokemonHeight, setPokemonHeight] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");
  const [pokemonEggGroups, setPokemonEggGroups] = useState("");
  const [pokemonCatchRate, setPokemonCatchRate] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonExperience, setPokemonExperience] = useState("");

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
            setPokemonDescription(flavor.flavor_text);
            return null;
          } else {
            return console.log("text not found");
          }
        });

        const eggGroups = speciesResult.data["egg_groups"]
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
          setPokemonName(pokemonName);
          setPokemonFrontImg(pokemonFrontImg);
          setPokemonAbilities(pokemonAbilities);
          setPokemonHeight(pokemonHeight);
          setPokemonWeight(pokemonWeight);
          setPokemonExperience(pokemonExperience);
          setPokemonEggGroups(eggGroups);
          setPokemonCatchRate(pokemonCatchRate);
          setPokemonStats({
            speed,
            specialDefense,
            specialAttack,
            defense,
            attack,
            hp,
          });
          setPokemonId(pokemonId);
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
      <div className="loading">
        <h1 className="loading-text">Loading...</h1>
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="pokemon-page">
        <div className="title">
          <h1 className="individual-name">
            {pokemonName
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
              <p>Speed: {pokemonStats.speed}</p>
              <p>Special-Defense: {pokemonStats.specialDefense}</p>
              <p>Special-Attack: {pokemonStats.specialAttack}</p>
              <p>Defense: {pokemonStats.defense}</p>
              <p>Attack: {pokemonStats.attack}</p>
              <p>HP: {pokemonStats.hp}</p>
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
      <div className="button">
        <Link to={"/"}>
          <button className="button-back">Back to main page</button>
        </Link>
      </div>
    </>
  );
};

export default SinglePokemonDetails;
