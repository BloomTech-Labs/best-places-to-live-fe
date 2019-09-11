import React from "react";
import { TopTenCard, CardDetail} from "./styled"


const TopTenCards = props => {
  return (
    <TopTenCard>
        <img
          component="img"
          alt="City Image"
          title="City Image"
          src={props.card.photo}/>
          <CardDetail>
              <p>{props.card.name}</p>
              <p>{props.card.cost_of_living}</p>
              <p>{props.card.avg_commute_time}</p>
        </CardDetail>
    </TopTenCard>
  );
};

export default TopTenCards;
