import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <TodoForm data-testid="helloword" />
      <TodoList todos={[]} />
    </div>
  );
};

export default App;
