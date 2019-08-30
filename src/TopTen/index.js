import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from "../Navigation";
import TopTenCards from "./TopTenCards";


const TopTen = () => {
    const [topTenList,settopTenList] = useState([])

    useEffect( () =>{
        const fetchTopTen = () =>{
            axios
                .get('https://demo0969329.mockable.io/topten')
                .then((res) => {
                    settopTenList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchTopTen();
    }, []);

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <Navigation />
            <div>TOP 10</div>
            <Grid container className={classes.root}  spacing={3}>
                <Grid xs item>
                    <Grid container justify="center">
                    {topTenList.map(state => (
                            <Grid item key={state.id}>
                                <TopTenCards  key={state.id} card={state}/>
                            </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopTen