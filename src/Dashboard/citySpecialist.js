import React, { useState } from 'react';
import axios from 'axios';
import { ProfileBox, FormBox, HeadingSecondary } from './styled';

const Specialist = () => {
  const [input, setInput] = useState({
    location: '',
    duration: '',
    expertise: '',
    specialist: false
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
    console.log(input);
    axios
      .post('', input)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('input', input);
        console.log(error.response);
      });
  };

  return (
    <ProfileBox>
      <FormBox onSubmit={handleSubmit}>
        <HeadingSecondary> Apply to become a City Specialist</HeadingSecondary>
        <p>
          Become recognized member of our community by sharing city,
          neighborhood knowledge to others users thinking of moving into your
          city. Help users, earn points, and make it to the top of your city
          leaderboard.
        </p>

        <input
          id='location'
          name='location'
          label='location'
          type='text'
          placeholder='City, State'
          value={input.location}
          onChange={handleChange}
        />
        <input
          id='duration'
          name='duration'
          label='duration'
          type='text'
          placeholder='How long have you lived in this city?'
          value={input.duration}
          onChange={handleChange}
        />
        <input
          id='expertise'
          name='expertise'
          label='expertise'
          type='text'
          placeholder='Specific city knowledge?'
          value={input.expertise}
          onChange={handleChange}
        />

        <button type='submit'>Save</button>
      </FormBox>
    </ProfileBox>
  );
};

export default Specialist;
