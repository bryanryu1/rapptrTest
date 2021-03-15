import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import Todo from "./todoForm";
import TodoItem from "./todoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const history = useHistory();

  const logOut = () => {
    // history.push("/login");
    console.log(localStorage);
  };

  const addTodo = (todo) => {
    if (todo.text.length <= 0 || todo.text.length > 25) {
      return <p className="ErrorMessage">Invalid Todo!</p>;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (newValue.text.length <= 0 || newValue.text.length > 25) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form>
        <button className="logOut" name="logOut" type="button" onClick={logOut}>
          Logout
        </button>
      </form>
      <div className="todoApp">
        <h1 className="Title">My To-Do List</h1>
        <form>
          <IoSearch color={"#2fccfc"} size={20} />
          <input
            className="Search"
            placeholder="Search"
            name="search"
            autoFocus
            type="text"
            value={input}
            onChange={handleChange}
          />
        </form>
        <Todo onSubmit={addTodo} />
        <TodoItem
          todos={todos}
          search={input}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoList;
