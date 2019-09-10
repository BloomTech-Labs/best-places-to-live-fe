import React, { useState, useEffect } from "react";
import axios from "axios";

import TopTenCards from "./TopTenCards";



const TopTen = () => {
  const [topTenList, settopTenList] = useState([]);



  useEffect(() => {
    const fetchTopTen = () => {
      axios
        .get("/city/topten-cost-of-living/")
        .then(res => {
          settopTenList(res.data.cities);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchTopTen();
  }, []);


  return (
    <div>
      <div
        margin="0 auto"
        width="30%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1>Top Cities</h1>
        <button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary">
          Filter
        </button>
      </div>
      <div>
            {topTenList
              ? topTenList.map(state => (
                    <TopTenCards key={state.id} card={state} />
                ))
              : ""}
      </div>


    </div>
  );
};

export default TopTen;