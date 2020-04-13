import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePokemon from "./SinglePokemon";
import Pagination from "./Pagination";
import PokemonFilter from "./PokemonFilter";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      let token;
      const result = await axios(currentPage, {
        cancelToken: new axios.CancelToken((c) => (token = c)),
      });

      setLoading(false);
      setPreviousPage(result.data.previous);
      setNextPage(result.data.next);
      setPokemons(result.data.results);

      return () => token.cancel();
    };

    getData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage(previousPage);
  };

  const handleNextPage = () => {
    setCurrentPage(nextPage);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  let filterPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  if (loading) return "Loading...";

  return (
    <>
      {/* <Container fluid> */}
      {/* <Row> */}
      {/* <Col> */}
      <PokemonFilter handleInput={handleInput} />
      {filterPokemons.map((filteredPokemon) => (
        <SinglePokemon
          key={filteredPokemon.name}
          name={filteredPokemon.name}
          url={filteredPokemon.url}
        />
      ))}
      <Pagination
        handlePreviousPage={previousPage ? handlePreviousPage : null}
        handleNextPage={nextPage ? handleNextPage : null}
      />
      {/* </Col> */}
      {/* </Row> */}
      {/* </Container> */}
    </>
  );
};

export default App;
