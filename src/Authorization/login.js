import React, { useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import UiLink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styled";
import { Link,Redirect } from "react-router-dom";
const Login = props => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    event.persist();
    setInput(inputs => ({
      ...inputs,
      [event.target.id]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/users/login", input)
      .then(response => {
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const googleAuth = () =>{
    window.location = "https://stagebe.letsmovehomie.com/auth/login"
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
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
            autoComplete="current-password"
            value={input.password}
            onChange={handleChange}
          />

          {/*remember me button when the time is needed to integrate it*/}
          {/*<FormControlLabel*/}
          {/*    control={<Checkbox value="remember" color="primary" />}*/}
          {/*    label="Remember me"*/}
          {/*/>*/}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
            <Button fullWidth variant="contained" color="primary" onClick={googleAuth}>
              Google log-in
            </Button>
          <Grid container>
            <Grid item xs>
              <UiLink href="#" variant="body2">
                Forgot password?
              </UiLink>
            </Grid>
            <Grid item>
              <UiLink href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </UiLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
