import React, {useState} from 'react';
import axios from 'axios';
import useStyles from "./styled";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PersonAddIcon from '@material-ui/icons/PersonAdd';


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

  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign Up</Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                name="name"
                label="name"
                type="text"
                value={input.name}
                onChange={handleChange}
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value={input.email}
                onChange={handleChange}
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={input.password}
                onChange={handleChange}
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password2"
                name="password2"
                label="Confirm password"
                type="password"
                value={input.password2}
                onChange={handleChange}
                autoFocus
            />
            <Button
                type='submit'
                variant="contained"
                fullWidth
                color="primary"
            > Register </Button>
          </form>
          <br/>
          <Link href="/login" variant="body2">
          {"Already have an account? Login In"}
        </Link>
        </div>
      </Container>

  )
}

export default Register;