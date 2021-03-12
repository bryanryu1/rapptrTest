import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useHistory } from "react-router-dom";

function Todo() {
  // const history = useHistory()

  // const logOut = () => {
  //     history.push('/')
  // }

  const [input, setInput] = useState("");

  return (
    <div className="todoPage">
      {/* <button onSubmit={logOut()}></button> */}
      <h1 className="Title">My To-Do List</h1>
      <div className="TodoContainer">
        <form>
          {/* <IoSearch color={"#2fccfc"} size={20}/>
          <input className='Search' placeholder='Search' name='search'  /> */}
          <input
            className="addTodo"
            name="text"
            type="text"
            placeholder="Add a todo"
            value={input}
          />
          <button className='newTodo'>New</button>
        </form>
      </div>
    </div>
  );
}

export default Todo;
