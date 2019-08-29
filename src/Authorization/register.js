import React, {useState} from 'react';
import axios from 'axios';
import { FormContainer } from './styled';


const Register = () => {
  const [input , setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const handleChange = (event) => {
  event.persist();
  setInput((input) => ({
    ...input,
    [event.target.id]: event.target.value,
  }));
};

  const handleSubmit = (event, input) => {
    event.preventDefault();

    axios
      .post('http://demo0969329.mockable.io/register', input)
      .then((response) => {
        console.log(input)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <label htmlFor='Register'>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
        value={input.firstName}
        id='firstName'
        type='text' 
        placeholder='First Name'
        onChange={handleChange}
        />
        <br/>
        <input 
        value={input.lastName}
        id='lastName'
        type='text' 
        placeholder='Last Name'
        onChange={handleChange}
        />
        <br/>        
        <input
        value={input.email}
        id='email'
        type='email' 
        placeholder='Email'
        onChange={handleChange}
        />
        <br/>        
        <input
        value={input.password}
        id='password'
        type='password' 
        placeholder='Password'
        onChange={handleChange}
        />
        <br/>
        <input
        id='password'
        type='password' 
        placeholder='Confirm password'
        onChange={handleChange}
        />
        <br/>
        <button type='submit'>Register</button>
      </form>
    </FormContainer>
    </label>

  );
};

export default Register;