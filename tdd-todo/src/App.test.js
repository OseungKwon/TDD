import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("render TodoForm, TodoList", () => {
    const { getByText, getByTestId } = render(<App />);
    getByText("등록");
    getByTestId("TodoList");
  });
  it("renders two defaults todos", () => {
    const { getByText } = render(<App />);
    getByText("test1");
    getByText("test2");
  });
  it("creates new todo", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기"
      }
    });
    fireEvent.click(getByText("등록"));
    getByText("새 항목 추가하기");
  });
  it("toggles todo", () => {
    const { getByText } = render(<App />);
    const todoText = getByText("test1");
    expect(todoText).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through");
  });
});
