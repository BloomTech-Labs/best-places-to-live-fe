import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
    card: {
        width: 300,
        maxHeight:400,
        margin:10
    },

});

const TopTenCards = (props) =>{
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="City Image"
                    height="140"
                    title="City Image"
                />
                <CardContent>
                    <Typography>
                        {props.card.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box
                display="flex"
                justifyContent="space-evenly">
                <Box display="flex"
                     alignItems="center">
                    <AttachMoneyIcon/>
                    {props.card.cost_of_living}
                </Box>
                <Box
                    display="flex"
                    alignItems="center">
                    <TimeToLeaveIcon />
                    {Math.round(props.card.avg_commute_time)}
                </Box>
            </Box>
        </Card>
    )
};

export default TopTenCards