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

              <i className="fas fa-money-check-alt"></i>
              <p>{props.card.cost_of_living}</p>

              <i className="fas fa-car"/>
              <p>{props.card.avg_commute_time}</p>

        </CardDetail>
    </TopTenCard>
  );
};

export default TopTenCards;
