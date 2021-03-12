import React, { useState } from "react";
import Todo from "./todo";
import TodoItem from "./todoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

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

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  return (
    <div className='todoApp'>
      <h1 className="Title">My To-Do List</h1>
      <Todo onSubmit={addTodo} />
      <TodoItem
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
