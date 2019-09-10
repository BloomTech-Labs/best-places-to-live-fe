import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className='mainBox'>
          <h1>Sign In</h1>

        <form className='' onSubmit={handleSubmit}>
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

          <button type="submit" className=''>
            Sign In
          </button>
          <button onClick={googleAuth}>
            Google log-in
          </button>
          <div>
            <div>
              <Link href="#">
                Forgot password?
              </Link>
            </div>
            <div>
              <Link href="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </div>
        </form>
      </div>

  );
};

export default Login;
