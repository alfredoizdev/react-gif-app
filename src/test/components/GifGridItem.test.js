import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test on <GifGridItem />", () => {
  const title = "some title";
  const url = "http://localhost/some.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should render the component ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have p with title coming from props", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should have img with url as src and title as alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("the main div should have class card", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("card")).toBe(true);
  });
});
