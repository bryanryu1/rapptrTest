import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

function Todo(props) {
  // const history = useHistory()

  // const logOut = () => {
  //     history.push('/')
  // }

  const [input, setInput] = useState("");

  const inputRef = useRef(null)

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput('')
  };

  return (
    // <div className="todoPage" >
    //   {/* <button onSubmit={logOut()}></button> */}
    //   <div className="TodoContainer">
        <form onSubmit={handleSubmit} className='todoForm'>
          <input
            className="addTodo edit"
            name="text"
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="addTodoButton">New</button>
        </form>
      // </div>
    // </div>
  );
}

export default Todo;
