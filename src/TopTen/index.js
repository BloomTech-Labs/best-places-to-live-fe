import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TopTenMasterContainer,
  TopTenTitle,
  TopTenCardContainer,
  IconBox,
  CategoryContentBox
} from "./styled";
import TopTenCards from "./TopTenCards";
import { proxy } from "../App/constants";
import costofliving from "../images/budget.png";
import commute from "../images/travel.png";
import safety from "../images/police-car.png";
import tolerance from "../images/tolerance.png";

const TopTen = () => {
  const model = {
    name: null,
    photo: null,
    score_total: null,
    score_safety: null,
    score_cost_of_living: null,
    score_tolerance: null,
    score_commute: null
  };
  const [topTenList, settopTenList] = useState([]);

  useEffect(() => {
    const fetchTopTen = () => {
      axios
        .post(`${proxy}/city/top`, { model: model })
        .then(res => {
          settopTenList(res.data.cities);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchTopTen();
  }, []);

  const fetchCostOfLiving = () => {
    axios
      .post(
        `${proxy}/city/top/?filter=score_cost_of_living&limit=12&order=desc`,
        { model: model }
      )
      .then(res => {
        settopTenList(res.data.cities);
        console.log(res.data.message);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const fetchCommute = () => {
    axios
      .post(`${proxy}/city/top/?filter=score_commute&limit=12&order=desc`, {
        model: model
      })
      .then(res => {
        settopTenList(res.data.cities);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchSafety = () => {
    axios
      .post(`${proxy}/city/top/?filter=score_safety&limit=12&order=desc`, {
        model: model
      })
      .then(res => {
        settopTenList(res.data.cities);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchTolerance = () => {
    axios
      .post(`${proxy}/city/top/?filter=score_tolerance&limit=12&order=desc`, {
        model: model
      })
      .then(res => {
        settopTenList(res.data.cities);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(topTenList);

  return (
    <TopTenMasterContainer>
      <TopTenTitle>
        <h1>Let's move homie! Explore the places to call home.</h1>
        <p>
          Customize your search. Click on a category. Find a place you'll love.
        </p>
      </TopTenTitle>
      <CategoryContentBox>
        <IconBox src={costofliving} onClick={fetchCostOfLiving}></IconBox>
        <IconBox src={commute} onClick={fetchCommute}></IconBox>
        <IconBox src={safety} onClick={fetchSafety}></IconBox>
        <IconBox src={tolerance} onClick={fetchTolerance}></IconBox>
      </CategoryContentBox>
      <TopTenCardContainer>
        {topTenList
          ? topTenList.map(state => <TopTenCards key={state.id} card={state} />)
          : ""}
      </TopTenCardContainer>
    </TopTenMasterContainer>
  );
};

export default TopTen;
