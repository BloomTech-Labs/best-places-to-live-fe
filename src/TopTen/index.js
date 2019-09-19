import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TopTenMasterContainer,
  TopTenTitle,
  TopTenWrapper,
  IconBox,
  CategoryContentBox
} from "./styled";
import TopTenCards from "./TopTenCards";
import { proxy } from "../App/constants";
import costofliving from "../images/budget.png";
import commute from "../images/travel.png";
import safety from "../images/police-car.png";
import tolerance from "../images/tolerance.png";
import TopTenBack from './Back-side';



const TopTen = () => {
  const model = {
    _id:null,
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
        <IconBox src={costofliving} onClick={fetchCostOfLiving}/>
        <IconBox src={commute} onClick={fetchCommute}/>
        <IconBox src={safety} onClick={fetchSafety}/>
        <IconBox src={tolerance} onClick={fetchTolerance}/>
      </CategoryContentBox>
      <TopTenWrapper>
            {topTenList
              ? topTenList.map((state,i) => (

                      <div className="flip-card" key={i}>
                          <div className="flip-card-inner">
                              <div className="flip-card-front" >
                                  <TopTenCards  card={state} />
                              </div>

                              <div className="flip-card-back">
                                  <TopTenBack key={state.id} card={state}/>
                              </div>
                        </div>
                      </div>

                ))
              : ""}
      </TopTenWrapper>

    </TopTenMasterContainer>
  );
};

export default TopTen;
