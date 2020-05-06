import Navbar from "./../js/Navbar";

it("renders correctly", () => {
  const wrapper = shallow(<Navbar />);

  expect(wrapper).toMatchSnapshot();
});
