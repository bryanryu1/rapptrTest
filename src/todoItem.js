import React, { useState } from "react";
import AddTodo from "./addTodo";

import { IoPencilSharp, IoTrashSharp } from "react-icons/io5";

function TodoItem({ todos, completeTodo, removeTodo, updateTodo, search }) {
  //UPDATE TODO//
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <AddTodo edit={edit} onSubmit={submitUpdate} />;
  }

  //IF THERE IS SEARCH INPUT, CHANGE DISPLAY OF TODOS//
  if (search) {
    let filtered = todos.filter((todo) => {
      const lower = todo.text.toLowerCase();
      const filters = search.toLowerCase();
      return lower.includes(filters);
    });
    todos = filtered;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todoRow complete" : "todoRow"}
      ley={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <IoPencilSharp
          size={20}
          color={"white"}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="editIcon"
        />
        <IoTrashSharp
          size={20}
          color={"white"}
          onClick={() => removeTodo(todo.id)}
          className="deleteIcon"
        />
      </div>
    </div>
  ));
}

export default TodoItem;
