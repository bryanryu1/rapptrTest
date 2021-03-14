import React, { useState } from "react";
import Todo from "./todoForm";

import { IoPencilSharp, IoTrashSharp } from "react-icons/io5";

function TodoItem({ todos, completeTodo, removeTodo, updateTodo, search }) {
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
    return <Todo edit={edit} onSubmit={submitUpdate} />;
  }

  if(search){
    let filtered = todos.filter(todo => {
      const lower = todo.text.toLowerCase()
      const filters = search.toLowerCase()
      return lower.includes(filters)
    })
    todos = filtered
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
