import React, {useState} from 'react';
import axios from 'axios';
import { FormContainer } from './styled';


const Login = () => {

const [input , setInput] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
});

const handleChange = (event) => {
  event.persist();
  setInput((inputs) => ({
    ...inputs,
    [event.target.id]: event.target.value,
  }));
};

const handleSubmit = (event) => {
  event.preventDefault();

  axios
    .get('http://167.71.246.202:3001/users/login')
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleClick = (event) => {
  event.preventDefault();

  axios
    .get('http://stagingbe.letsmovehomie.com:3001/auth/login')
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
};


  return (
    <label htmlFor='Log-in'>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Log-In</h1>
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
        <button type='submit'>Login</button>
      </form>
      <button onClick={handleClick}>Google log-in</button>
      </FormContainer>
    </label>

  );
};

export default Login;