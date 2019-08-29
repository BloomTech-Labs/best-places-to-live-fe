import React, {useState} from 'react';
import axios from 'axios';
import useStyles from "./styled";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";


const Register = () => {
  const [input, setInput] = useState({
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

  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xs">
        {/*<CssBaseLine />*/}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">Sign Up</Typography>
          <form className={classes.form} noValidate value={{handleSubmit}}>
              <TextField
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
              />
            <TextField
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
            <Button type='submit'> Register </Button>
            <Link href="/register" variant="body2">
              {"Already have an account? Login In"}
            </Link>
          </form>
        </div>
      </Container>

  )
}

export default Register;