import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1 classname="Title">Rapptr Labs</h1>
      <div className='FormContainer'>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input name="email" placeholder="user@rapptrlabs.com" />
        <label>Password:</label>
        <input name="password" placeholder="Must be at least 4 characters" />
      </form>
      </div>
    </div>
  );
}

export default App;
