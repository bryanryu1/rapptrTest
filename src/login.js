import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <div className="LoginPage">
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
              validate: (value) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(value).toLowerCase());
              },
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
            type="password"
          />
          {errors.password && <p className="ErrorMessage">Invalid Password</p>}
          <button
            style={{
              opacity: errors.email || errors.password ? "50%" : "100%",
            }}
            ref={register}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
