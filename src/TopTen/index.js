import React, { useState, useEffect } from "react";
import axios from "axios";
import {TopTenMasterContainer, TopTenTitle, TopTenWrapper, TopTenBody, TopTenCard} from './styled';
import TopTenCards from "./TopTenCards";
import TopTenBack from "./Back-side";
import { proxy } from '../App/constants';




const TopTen = () => {
  const [topTenList, settopTenList] = useState([]);

  useEffect(() => {
    const fetchTopTen = () => {
      axios
        .get(`${proxy}/city/topten-cost-of-living/`)
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
        <button>
          Filter
        </button>
      </TopTenTitle>
      <TopTenWrapper>
            {topTenList
              ? topTenList.map(state => (
                  <>
                      <div className="flip-card">
                          <div className="flip-card-inner">
                              <div className="flip-card-front">
                                  <TopTenCards key={state.id} card={state} />
                              </div>

                              <div className="flip-card-back">
                                  <TopTenBack data={state}/>
                              </div>
                        </div>
                      </div>
                     </>
                ))
              : ""}
      </TopTenWrapper>

    </TopTenMasterContainer>
  );
};

export default TopTen;