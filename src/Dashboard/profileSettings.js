import React, {useState} from 'react';
import axios from 'axios';


const Profile = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
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
        <div className=''>
          <h1>Profile Settings</h1>
          <form className='' onSubmit={handleSubmit}>
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
            <button type='submit'>
              Save 
            </button>
          </form>
          <br/>
        </div>

  )
}

export default Profile;