import React, { useState, useRef } from "react";

function AddTodo({ onSubmit }) {
  //INPUT FOR ADDING TODO//
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //ADD BUTTON//
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="addTodo edit"
        name="text"
        type="text"
        placeholder="Add a todo"
        autoFocus
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="addTodoButton">New</button>
    </form>
  );
}

export default AddTodo;
