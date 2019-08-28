import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 3,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

}));

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Link to="/" style={{textDecoration:'none',color:'white'}}>
                        <Button color="inherit">Home</Button>
                    </Link>

                    <Link to="/topten" style={{textDecoration:'none',color:'white'}}>
                        <Button color="inherit">Top10</Button>
                    </Link>

                    <Link to="/Login" style={{textDecoration:'none',color:'white'}}>
                        <Button color="inherit">Login</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}
