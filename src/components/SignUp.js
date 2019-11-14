import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import Error from "./Error";

function SignUp({ signup, history, error }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    const response = await signup(data);

    console.log(response);
    if (response === "Successful") {
      history.push("/");
    } else {
      console.log(response);
    }
  };
  console.log(errors);

  return (
    <>
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          ref={register({ required: true, minLength: 2 })}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="Password"
          placeholder="password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          ref={register({ required: true, minLength: 2 })}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    error: state.signupError
  };
};

export default withRouter(connect(mapStateToProps, { signup })(SignUp));
