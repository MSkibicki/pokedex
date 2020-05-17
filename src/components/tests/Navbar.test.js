import Navbar from "./../js/Navbar";

describe("<Navbar />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<Navbar />);

    const divClass = wrapper.find("div").hasClass("navbar");

    expect(divClass).toBe(true);
  });

  it("has correct h1 classname", () => {
    const wrapper = shallow(<Navbar />);

    const headingClass = wrapper.find("h1").hasClass("navbar-title");

    expect(headingClass).toBe(true);
  });

  it("displays h1 text correctly", () => {
    const wrapper = shallow(<Navbar />);

    const text = wrapper.find("h1").text();

    expect(text).toEqual("Pokedex");
  });
});
