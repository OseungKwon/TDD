import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile/>", () => {
  it("matches snapshot", () => {
    // render는 반응 요소를 DOM으로 렌더링한다.
    const utils = render(<Profile username="jamong" name="oseung" />);
    expect(utils.container).toMatchSnapshot();
  });
});
