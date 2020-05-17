import Button from "./../js/Button";

describe("<Button />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button text="Back to main page" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("displays button text correctly", () => {
    const wrapper = shallow(<Button text="Back to main page" />);

    const text = wrapper.find(".button-back").text();

    expect(text).toEqual("Back to main page");
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<Button text="Back to main page" />);

    const divClass = wrapper.find("div").hasClass("button");

    expect(divClass).toBe(true);
  });

  it("has correct button classname", () => {
    const wrapper = shallow(<Button text="Back to main page" />);

    const buttonClass = wrapper.find("button").hasClass("button-back");

    expect(buttonClass).toBe(true);
  });
});
