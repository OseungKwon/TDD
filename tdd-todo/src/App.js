import React, { useState, useRef } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test1",
      done: true
    },
    { id: 2, text: "test2", done: false }
  ]);
  const nextId = useRef(3);
  const onInsert = (text) => {
    setTodos(
      todos.concat({
        id: nextId.current,
        text,
        done: false
      })
    );
    nextId.current += 1;
  };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <div>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default App;
