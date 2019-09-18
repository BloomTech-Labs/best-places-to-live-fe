import React, { useState, useEffect } from "react";
import axios from "axios";
import { proxy } from "../App/constants";
import {
  HeadingSecondary,
  FormUserData,
  FormGroup,
  FormGroupMaBtMd,
  FormGroupRight,
  Button,
  Label,
  Input,
  Line
} from "./styled";


const PasswordSettings = () => {
  const [input, setInput] = useState({
    currentPassword: "",
    newPassword: ""
  });

  useEffect(() => {});

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
      .post("http://162.243.168.251/users/register", input)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("input", input);
        console.log(error.response);
      });
  };

  return (
    <div>
      <Line />
      <HeadingSecondary>Password Change</HeadingSecondary>
      <FormUserData>
        <FormGroup>
          <Label for="password-current">Current password</Label>
          <Input
            id="password-current"
            type="password"
            placeholder="••••••••"
            required
            minlength="8"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">New password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            required
            minlength="8"
          />
        </FormGroup>
        <FormGroupMaBtMd>
          <Label for="password-confirm">Confirm password</Label>
          <Input
            id="password-confirm"
            type="password"
            placeholder="••••••••"
            required
            minlength="8"
          />
        </FormGroupMaBtMd>
        <FormGroupRight>
          <Button>Save Password</Button>
        </FormGroupRight>
      </FormUserData>
    </div>
  );
};

export default PasswordSettings;
