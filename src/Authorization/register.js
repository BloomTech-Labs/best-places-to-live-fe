import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  LoginImg,
  LoginContainer,
  LoginFormParent,
  LoginForm,
  RegisterBottomLinks,
  SignInButton,
    ErrorMessage
} from "./styled";
import Icon from "../images/LMHiconcopy.png";

const Register = (props) => {
  const [error, setError] = useState('')
  const [input, setInput] = useState({
    // Commenting out these key:value pairs until the back end is refractored to receive them
    // firstName: '',
    // lastName: '',
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = event => {
    event.persist();
    setInput(input => ({
      ...input,
      [event.target.id]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
    .post("https://stagebe.letsmovehomie.com/users/register", input)
    .then(response => {
      localStorage.setItem("letsmovehomie", response.data.token);
      props.history.push('/dashboard');
    })
    .catch(error => {
      setError(error.response.data.message);
    });
  };
  
  return (
    <>
      <LoginImg />
      <LoginContainer>
        <LoginFormParent>
          <Link to="/">
            <img alt="Icon" src={Icon} />
          </Link>
          <h1>Sign Up</h1>
          <LoginForm className="" onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              label="name"
              type="text"
              placeholder="name"
              value={input.name}
              onChange={handleChange}
            />
            <input
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="email"
              value={input.email}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="password"
              value={input.password}
              onChange={handleChange}
            />
            <input
              id="password2"
              name="password2"
              label="Confirm password"
              type="password"
              placeholder="confirm password"
              value={input.password2}
              onChange={handleChange}
            />
            <SignInButton>Register</SignInButton>
            <ErrorMessage>
            {error ? (<div> {error}</div>) : (<></>)}
            </ErrorMessage>
          </LoginForm>
        </LoginFormParent>
        <RegisterBottomLinks>
          <Link to="/login">{"Already have an account? Login In"}</Link>
        </RegisterBottomLinks>
      </LoginContainer>
    </>
  );
};
export default Register;
