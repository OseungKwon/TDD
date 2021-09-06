import React, { useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={text}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
