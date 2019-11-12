import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";

function SignUp({ signup, history }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    await signup(data);
    history.push("/login");
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        ref={register({ required: true, minLength: 6 })}
      />
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
        ref={register({ required: true, minLength: 6 })}
      />
      {/* <input
        type="text"
        placeholder="Location"
        name="Location"
        ref={register({ required: true, minLength: 2 })}
      /> */}

      <input type="submit" />
    </form>
  );
}

export default connect(
  null,
  { signup }
)(SignUp);
