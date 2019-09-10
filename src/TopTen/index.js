import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Navigation from "../Navigation";
import TopTenCards from "./TopTenCards";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useStyles, StyledMenu } from "./styled";

const TopTen = () => {
  const [topTenList, settopTenList] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    const fetchTopTen = () => {
      axios
        .get("/city/topten-cost-of-living/")
        .then(res => {
          settopTenList(res.data.cities);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchTopTen();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <Box
        margin="0 auto"
        width="30%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1>Top Cities</h1>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Filter
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        />
      </Box>
      <Grid container className={classes.root} spacing={3}>
        <Grid xs item>
          <Grid container justify="center">
            {topTenList
              ? topTenList.map(state => (
                  <Grid item key={state._id}>
                    <TopTenCards key={state.id} card={state} />
                  </Grid>
                ))
              : ""}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopTen;
