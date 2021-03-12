import React from "react";
import { useForm } from "react-hook-form";
import { IoPersonCircleSharp, IoLockClosedSharp } from "react-icons/io5";
import { withRouter, useHistory } from "react-router-dom";

const axios = require("axios");

function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  const history = useHistory();

  async function onSubmit(data, e) {
    // await fetchAPI();
    // e.target.reset();
    console.log(data);
    history.push("/todo");
  }

  const fetchAPI = async (data) => {
    const info = JSON.stringify({
      email: data.email,
      password: data.password,
    });
    const config = {
      method: "post",
      url: "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
      headers: {
        "Content-Type": "application/json",
      },
      data: info,
    };

    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LoginPage">
      <h1 className="Title">Rapptr Labs</h1>
      <div className="FormContainer">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <label>Email:</label>
          <div className="InputWrapper">
            <IoPersonCircleSharp color={"#2fccfc"} size={20} />
            <input
              className="Input"
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
          </div>
          {errors.email && (
            <p className="ErrorMessage">Please enter a valid email</p>
          )}
          <label>Password:</label>
          <div className="InputWrapper">
            <IoLockClosedSharp color={"#2fccfc"} size={20} />
            <input
              className="Input"
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
          </div>
          {errors.password && <p className="ErrorMessage">Invalid Password</p>}
          <div className="buttonWrapper">
            <button
              className="submit"
              style={{
                opacity: errors.email || errors.password ? "50%" : "100%",
              }}
              ref={register}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
