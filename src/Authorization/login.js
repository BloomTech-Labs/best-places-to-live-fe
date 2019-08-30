import React, {useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styled';



const Login = (props) => {
const [input , setInput] = useState({
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
    .post('http://stagingbe.letsmovehomie.com:3001/users/login/', input)
    .then((response) => {
      props.history.push('/')
    })
    .catch((err) => {
      console.log(err);
    });
};

const classes = useStyles();

return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type='email'
                autoComplete="email"
                value={input.email}
                onChange={handleChange}
                autoFocus/>
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
                onChange={handleChange}/>

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
                className={classes.submit}>Sign In</Button>
          <Link href='http://stagingbe.letsmovehomie.com:3001/auth/login'>
            <Button
                fullWidth
                variant='contained'
                color='primary'>Google log-in</Button>
          </Link>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>

        </div>
      </Container>
  );
}

export default Login;