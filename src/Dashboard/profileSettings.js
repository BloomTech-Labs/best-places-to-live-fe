import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  UserViewFormContainer,
  HeadingSecondary,
  FormUserData,
  FormGroup,
  FormGroupMaBtMd,
  // PHOTO UPLOAD RC3
  // FormGroupFormPhotoUpload,
  // Image,
  // FormInputUpload,
  // FormUploadLabel,
  // FormGroupRight,
  // Button,
  Label,
  Input
} from './styled';
import PasswordSettings from './passwordSettings';



const Profile = () => {
  const token = localStorage.getItem("letsmovehomie");
  const [input, setInput] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchAuthorizedUser = () => {
      axios
        .get("https://stagebe.letsmovehomie.com/users/profile/", {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          setInput(response.data);
          console.log(response.data);
        })
    }

    fetchAuthorizedUser();
  }, []);


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
      .post('http://162.243.168.251/users/register', input)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('input', input);
        console.log(error.response);
      });
  };

  return (
    <UserViewFormContainer>
      <HeadingSecondary>Profile Settings</HeadingSecondary>
      <FormUserData>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            id='name'
            type='text'
            value={input.name}
            onChange={handleChange}
            required
            name='name'
            placeholder=''
          />
        </FormGroup>
        <FormGroupMaBtMd>
          <Label for='email'>Email address</Label>
          <Input
            id='email'
            type='email'
            value={input.email}
            a
            onChange={handleChange}
            required
            name='email'
            placeholder=''
          />
        </FormGroupMaBtMd>
        {/* 

        PROFILE PHOTO RC3

        <FormGroupFormPhotoUpload>
          <Image src='https://www.biography.com/.image/t_share/MTE4MDAzNDEwNDYyNDEwMjU0/sir-richard-branson-9224520-1-402.jpg' />
          <FormInputUpload
            id='photo'
            type='file'
            accept='image/*'
            name='photo'
          />
          <FormUploadLabel for='photo'>Choose new photo</FormUploadLabel>
        </FormGroupFormPhotoUpload>
        <FormGroupRight>
          <Button>Save Profile</Button>
        </FormGroupRight> */}
      </FormUserData>
      <PasswordSettings />
    </UserViewFormContainer>
  );
};

export default Profile;
