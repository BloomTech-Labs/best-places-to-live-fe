import React, {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {RegisterContainer, RegisterFormParent,RegisterForm} from "./styled";


const Register = () => {
  const [input, setInput] = useState({
    // Commenting out these key:value pairs until the back end is refractored to receive them
    // firstName: '',
    // lastName: '',
    name: '',
    email: '',
    password: '',
    password2: '',
  });


  const handleChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input)
    axios
        .post('http://162.243.168.251/users/register', input)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log('input', input);
          console.log(error.response);
        });
  };

  return (
      <RegisterContainer>
        <img/>
        <RegisterFormParent>
          <h1>Sign Up</h1>
          <RegisterForm className='' onSubmit={handleSubmit}>
    {/* Commenting out these key:value pairs until the back end is refractored to receive them */}
              {/* <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  name="FirstName"
                  label="First Name"
                  type="text"
                  value={input.firstName}
                  onChange={handleChange}
                  autoFocus
              /> */}
            {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                value={input.lastName}
                onChange={handleChange}
                autoFocus
            /> */}
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
            <button
                type='submit'
                variant="contained"
                fullWidth
                color="primary"
            > Register 
            </button>
          </RegisterForm>
          <br/>
          <Link to="/login">
          {"Already have an account? Login In"}
        </Link>
        </RegisterFormParent>
      </RegisterContainer>

  )
}

export default Register;