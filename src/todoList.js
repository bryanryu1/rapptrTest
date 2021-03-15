import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import Todo from "./todoForm";
import TodoItem from "./todoItem";

function TodoList() {
  //ARRAY OF TODOS//
  const [todos, setTodos] = useState([]);

  //SEARCH BAR//
  const [input, setInput] = useState("");

  //LOCAL STORAGE//
  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const storage = JSON.parse(localStorage.getItem("todos"));
      setTodos(storage);
    }
  };

  //LOGOUT FUNCTION//
  const history = useHistory();

  const logOut = () => {
    // history.push("/login");
    console.log(localStorage);
  };

  //ADD TODO GOES TO TODO FORM//
  const addTodo = (todo) => {
    if (todo.text.length <= 0 || todo.text.length > 25) {
      return <p className="ErrorMessage">Invalid Todo!</p>;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  //COMPLETE TODO, UPDATE TODO, REMOVE TODO GOES TO TODO ITEM//
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
