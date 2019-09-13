import React, { useState } from "react";
import axios from "axios";
import {ProfileBox, FormBox} from "./styled";

const Specialist = () => {
  const [input, setInput] = useState({
    location: "",
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
      .post("", input)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("input", input);
        console.log(error.response);
      });
  };

  return (
    <ProfileBox>
      <FormBox onSubmit={handleSubmit}>
        <h4> Update info</h4>
        <input
          id="location"
          name="location"
          label="location"
          type="text"
          placeholder="City, State"
          value={input.location}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </FormBox>
    </ProfileBox>
  );
};

export default Specialist;