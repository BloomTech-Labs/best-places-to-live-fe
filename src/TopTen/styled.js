import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';

 export const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));


export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));
