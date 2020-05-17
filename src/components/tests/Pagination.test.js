import Pagination from "./../js/Pagination";

describe("<Pagination />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Pagination handlePreviousPage={() => {}} handleNextPage={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("displays previous button text correctly", () => {
    const wrapper = mount(
      <Pagination handlePreviousPage={() => {}} handleNextPage={() => {}} />
    );

    const text = wrapper.find(".button-previous").text();

    expect(text).toEqual("Previous Page");
  });

  it("displays next button text correctly", () => {
    const wrapper = mount(
      <Pagination handlePreviousPage={() => {}} handleNextPage={() => {}} />
    );

    const text = wrapper.find(".button-next").text();

    expect(text).toEqual("Next Page");
  });

  it("calls handlePreviousPage on click", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Pagination handlePreviousPage={spy} handleNextPage={() => {}} />
    );

    wrapper.find(".button-previous").simulate("click");

    expect(spy.calledOnce).toBe(true);
  });

  it("calls handleNextPage on click", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Pagination handlePreviousPage={() => {}} handleNextPage={spy} />
    );

    wrapper.find(".button-next").simulate("click");

    expect(spy.calledOnce).toBe(true);
  });
});
