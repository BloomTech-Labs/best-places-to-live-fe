import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {LoginContainer, LoginFormParent ,LoginForm, LoginButtons, LoginImg} from "./styled";

const Login = props => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    event.persist();
    setInput(inputs => ({
      ...inputs,
      [event.target.id]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/users/login", input)
      .then(response => {
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const googleAuth = () =>{
    window.location = "https://stagebe.letsmovehomie.com/auth/login"
  }


  return (
      <>
        <LoginImg />
    <LoginContainer>

      <LoginFormParent>

          <h1>Log In</h1>

        <LoginForm onSubmit={handleSubmit}>
          <input
            id="email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="email"
            autoComplete="email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
            value={input.password}
            onChange={handleChange}
          />

          {/*remember me button when the time is needed to integrate it*/}
          {/*<FormControlLabel*/}
          {/*    control={<Checkbox value="remember" color="primary" />}*/}
          {/*    label="Remember me"*/}
          {/*/>*/}

          <LoginButtons>
          <button type="submit" className=''>
            Sign In
          </button>

          <button onClick={googleAuth}>
            Google log-in
          </button>
          </LoginButtons>
            <div>
              <Link href="#">
                Forgot password?
              </Link>
            </div>

            <div>
              <Link to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>

        </LoginForm>

      </LoginFormParent>

    </LoginContainer>
</>
  );
};

export default Login;
