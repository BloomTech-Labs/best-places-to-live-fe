import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopTenMasterContainer,TopTenTitle, TopTenCardContainer} from './styled';
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
      <TopTenCardContainer>
            {topTenList
              ? topTenList.map(state => (
                  <TopTenBack data={state}/>,
                  <TopTenCards key={state.id} card={state} />
                ))
              : ""}
      </TopTenCardContainer>

    </TopTenMasterContainer>
  );
};

export default TopTen;