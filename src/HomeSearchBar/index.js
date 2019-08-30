import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';  * not being used.. not sure if we need it later so just commenting it out
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
        display: 'flex',
        maxWidth: 500,
        margin: '0 auto',
        marginTop: 100,
    },

}));

export default function HomeSearchBar() {
    const classes = useStyles();

    return (
        <div className={classes.homeSearch}>
            <TextField
                id="outlined-search"
                label="Enter an Address, City, or Zip Code"
                type="Search "
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
        </div>
    );
        
    
}