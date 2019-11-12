import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/login.js";

function Login({ login, history }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    console.log(data);
    await login(data);
    history.push("/profile");
  };
  console.log("Login Errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register({ required: true })}
      />

      <input type="submit" />
    </form>
  );
}

export default connect(
  null,
  { login }
)(Login);
