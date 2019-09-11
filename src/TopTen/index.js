import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopTenMasterContainer,TopTenTitle, TopTenCardContainer, } from './styled';

import TopTenCards from "./TopTenCards";
import Navigation from "../Navigation";



const TopTen = () => {
  const [topTenList, settopTenList] = useState([]);



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


  return (
    <TopTenMasterContainer>
      <TopTenTitle>
        <h1>Top Cities</h1>
        <button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary">
          Filter
        </button>
      </TopTenTitle>
      <TopTenCardContainer>
            {topTenList
              ? topTenList.map(state => (
                    <TopTenCards key={state.id} card={state} />
                ))
              : ""}
      </TopTenCardContainer>
    </TopTenMasterContainer>
  );
};

export default TopTen;