import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  });

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
            style={{ border: errors.email ? "2px solid red" : "none" }}
            ref={register({
              required: true,
              maxLength: 50,
              validate: (value) => value.includes("@"),
            })}
          />
          {errors.email && (
            <p className="ErrorMessage">Please enter a valid email</p>
          )}
          <label>Password:</label>
          <input
            name="password"
            style={{ border: errors.password ? "2px solid red" : "none" }}
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
          {errors.password && <p className="ErrorMessage">Invalid Password</p>}
          <button
            style={{
              opacity: errors.email || errors.password ? "50%" : "none",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
