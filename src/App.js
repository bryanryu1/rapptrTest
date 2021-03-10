import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <div className="App">
      <h1 className="Title">Rapptr Labs</h1>
      <div className="FormContainer">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <label>Email:</label>
          <input
            name="email"
            placeholder="user@rapptrlabs.com"
            ref={register({
              required: true,
              maxLength: 50,
              validate: (value) => value.includes("@"),
            })}
          />
          {errors.email && <p>Please enter a valid email</p>}
          <label>Password:</label>
          <input
            name="password"
            placeholder="Must be at least 4 characters"
            ref={register({
              required: true,
              minLength: 4,
              maxLength: 16,
              validate: {
                notSpace: (value) => value === value.trim(),
              },
            })}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
