import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("render TodoForm, TodoList", () => {
    const { getByText, getByTestId } = render(<App />);
    getByText("등록");
    getByTestId("TodoList");
  });
});
