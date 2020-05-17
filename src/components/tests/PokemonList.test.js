import PokemonList from "./../js/PokemonList";
import Navbar from "./../js/Navbar";
import PokemonFilter from "./../js/PokemonFilter";
import Pagination from "./../js/Pagination";

describe("<PokemonList />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PokemonList />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<PokemonList />);

    const divClass = wrapper.find("div.pokemon-list").hasClass("pokemon-list");

    expect(divClass).toBe(true);
  });

  it("renders <Navbar /> component", () => {
    const wrapper = shallow(<PokemonList />);

    const navbar = wrapper.find(Navbar);

    expect(navbar.length).toEqual(1);
  });

  it("renders <PokemonFilter /> component", () => {
    const wrapper = shallow(<PokemonList />);

    const filter = wrapper.find(PokemonFilter);

    expect(filter.length).toEqual(1);
  });

  it("renders <Pagination /> component", () => {
    const wrapper = shallow(<PokemonList />);

    const pagination = wrapper.find(Pagination);

    expect(pagination.length).toEqual(1);
  });
});
