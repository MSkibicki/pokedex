import PokemonList from "./../js/PokemonList";

it("renders correctly", () => {
  const wrapper = shallow(<PokemonList />);

  expect(wrapper).toMatchSnapshot();
});
