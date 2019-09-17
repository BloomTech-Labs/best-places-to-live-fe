import React from "react";
import {CardDetail} from "./styled";

const TopTenCards = props => {
  return (
      <>

          <img alt="Card-Image"src={props.card.photo} width="300px" height="200px" />
              <CardDetail>
                  <p>{props.card.name}</p>
          <i className="fas fa-money-check-alt"></i>
          <p>{props.card.cost_of_living}</p>
          <i className="fas fa-car"/>
          <p>{props.card.avg_commute_time}</p>
          </CardDetail>
      </>

  );
};

export default TopTenCards;
