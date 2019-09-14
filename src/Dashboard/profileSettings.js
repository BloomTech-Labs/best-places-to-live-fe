import React, { useState } from "react";
import axios from "axios";
import { MyBody, ProfileColors, UserView, UserViewMenu, SideNav, UserViewContent, UserViewFormContainer,
  HeadingSecondary, FormUserData, FormGroup, FormGroupMaBtMd, FormGroupFormPhotoUpload, Image, FormInputUpload, FormUploadLabel, FormGroupRight, Button, SideNavLi, SideNavLiA, Icon, Label, Input, Line  } from './styled';

const Profile = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
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
    <UserViewFormContainer>
        <HeadingSecondary>
            Profile Settings
        </HeadingSecondary>
        <FormUserData>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input id="name" type="text" value="" required name="name" placeholder="Richard Branson"/>
            </FormGroup>
            <FormGroupMaBtMd>
                    <Label for="email">Email address</Label>
                    <Input id="email" type="email" value="" required name="email" placeholder="richard@virgin.com"/>
            </FormGroupMaBtMd>
            <FormGroupFormPhotoUpload>
                <Image src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNDYyNDEwMjU0/sir-richard-branson-9224520-1-402.jpg" />
                <FormInputUpload id="photo" type="file" accept="image/*" name="photo"/>
                <FormUploadLabel for="photo">Choose new photo</FormUploadLabel>
            </FormGroupFormPhotoUpload>
            <FormGroupRight>
                    <Button>Save Profile</Button>
            </FormGroupRight>
        </FormUserData>
  </UserViewFormContainer>
  <Line>&nbsp;</Line>
  <UserViewFormContainer>
          <HeadingSecondary>
            Password Change
        </HeadingSecondary>
        <FormUserData>
            <FormGroup>
                <Label for="password-current">Current password</Label>
                <Input id="password-current" type="password" placeholder="••••••••" required minlength="8" />
            </FormGroup>
            <FormGroup>
                <Label for="password">New password</Label>
                <Input id="password" type="password" placeholder="••••••••" required minlength="8" />
            </FormGroup>
            <FormGroupMaBtMd>
                    <Label for="password-confirm">Confirm password</Label>
                    <Input id="password-confirm" type="password" placeholder="••••••••" required minlength="8" />
            </FormGroupMaBtMd>
            <FormGroupRight>
                    <Button>Save Password</Button>
            </FormGroupRight>
        </FormUserData>
  </UserViewFormContainer>
  </div>
  );
};

export default Profile;
