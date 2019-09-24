import React from "react";
import renderer from "react-test-renderer";
import TopTen from "../../TopTen";

describe("<TopTen />", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<TopTen />).toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
  });
});
