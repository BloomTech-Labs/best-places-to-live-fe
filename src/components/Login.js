import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../action/actionCreator.js";

function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    props.login(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="password"
        name="Password"
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
