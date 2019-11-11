import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { register } from "../action/actionCreator.js";

function SignUp(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => props.register(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="First name"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        name="Last name"
        ref={register({ required: true, maxLength: 100 })}
      />
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
      <input
        type="text"
        placeholder="Location"
        name="Location"
        ref={register({ required: true, minLength: 2 })}
      />

      <input type="submit" />
    </form>
  );
}

export default connect(
  null,
  { register }
)(SignUp);
