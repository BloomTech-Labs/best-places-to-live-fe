import React from "react";
import HomeSearchBar from "../../HomeSearchBar";
import renderer from "react-test-renderer";

describe("<HomeSearchBar />", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<HomeSearchBar />).toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
  });
});
