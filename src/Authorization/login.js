import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {LoginContainer,
        LoginFormParent,
        LoginForm,
        FooterButtons,
        LoginImg,
        SignInButton,
        GoogleButton} from "./styled";
import Icon from '../images/LMHiconcopy.png'

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
  };


  return (
    <>
      <LoginImg />

      <LoginContainer>

        <LoginFormParent>
          <Link to="/">
            <img src={Icon}/>
          </Link>

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

            <SignInButton type="submit" className=''>
              Sign In
            </SignInButton>
            <GoogleButton onClick={googleAuth}><i className="fab fa-google-plus-g">
              </i>login
            </GoogleButton>

              <FooterButtons>

                <Link href="#">
                  Forgot password?
                </Link>




                <Link to="/register">
                  {"Don't have an account? Sign Up"}
                </Link>

              </FooterButtons>

          </LoginForm>

        </LoginFormParent>

      </LoginContainer>
    </>
  );
};

export default Login;
