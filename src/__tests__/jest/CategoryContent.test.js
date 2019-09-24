import React from "react";
import CategoryContent from "../../CategoryContentHelper";
import renderer from "react-test-renderer";

describe("<CategoryContent />", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<CategoryContent />).toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
  });
});
