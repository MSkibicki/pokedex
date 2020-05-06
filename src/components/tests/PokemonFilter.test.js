import PokemonFilter from "./../js/PokemonFilter";

it("renders correctly", () => {
  const wrapper = shallow(<PokemonFilter handleInput={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

it("calls handleInput on change", () => {
  const spy = sinon.spy();
  const wrapper = mount(<PokemonFilter handleInput={spy} />);

  wrapper.find("#filter").simulate("change");

  expect(spy.calledOnce).toBe(true);
});
