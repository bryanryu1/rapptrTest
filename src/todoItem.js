import React, { useState } from "react";
import Todo from "./todo";
import TodoList from "./todoList";

import { IoPencilSharp, IoTrashSharp } from "react-icons/io5";

function TodoItem({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Todo edit={edit} onSubmit={submitUpdate} />;
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
