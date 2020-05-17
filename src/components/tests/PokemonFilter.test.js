import PokemonFilter from "./../js/PokemonFilter";

describe("<PokemonFilter />", () => {
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

  it("displays label text correctly", () => {
    const wrapper = shallow(<PokemonFilter handleInput={() => {}} />);

    const text = wrapper.find("label").text();

    expect(text).toEqual("Filter pokemon by name.");
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<PokemonFilter handleInput={() => {}} />);

    const divClass = wrapper.find("div").hasClass("filter");

    expect(divClass).toBe(true);
  });

  it("has correct input classname", () => {
    const wrapper = shallow(<PokemonFilter handleInput={() => {}} />);

    const inputClass = wrapper.find("input").hasClass("input");

    expect(inputClass).toBe(true);
  });
});
