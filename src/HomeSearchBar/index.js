import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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