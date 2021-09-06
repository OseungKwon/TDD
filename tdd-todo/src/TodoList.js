import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
