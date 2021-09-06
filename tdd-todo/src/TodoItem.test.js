import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("<TodoItem/>", () => {
  const sampleTodo = {
    id: 1,
    text: "Todo 배우기",
    done: false
  };
  const setup = (props = {}) => {
    const initalProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initalProps} {...props} />);
    const { getByText } = utils;
    const todo = initalProps.todo;
    const span = getByText(todo.text);
    const button = getByText("삭제");
    return {
      ...utils,
      span,
      button
    };
  };
  it("test span, button", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("done=>show line-through text-style", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });
  it("done=>show none text-style", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).not.toHaveStyle("text-decoration: none;");
  });
  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });
  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
