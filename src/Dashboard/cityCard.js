import React from "react";
import { CityCard, CardDetail} from "./styled"


const CityCards = props => {
  return (
    <CityCard>
        <img
          alt="City"
          src={props.card.photo}/>
          <CardDetail>

              <p>{props.card.name}</p>

              <i className="fas fa-money-check-alt"></i>
              <p>{props.card.cost_of_living}</p>

              <i className="fas fa-car"/>
              <p>{props.card.avg_commute_time}</p>

        </CardDetail>
    </CityCard>
  );
};

export default CityCards;
