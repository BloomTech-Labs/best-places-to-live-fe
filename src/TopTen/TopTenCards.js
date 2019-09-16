import React from "react";
import { TopTenCard,TopTenCardFront ,CardDetail, TopTenCardSide ,TopTenBody} from "./styled"
import TopTen from "./index";


const TopTenCards = props => {
  return (
      <TopTenCard className = "card-container">
          <TopTenBody className = "card-body">
              <TopTenCardSide className = "card-side">

                  <TopTenCardFront className = "side-front">
                      <img alt="Card-Image"src={props.card.photo} width='400px' height='200px'/>
                      <CardDetail>
                          <p>{props.card.name}</p>
                          <i className="fas fa-money-check-alt"></i>
                          <p>{props.card.cost_of_living}</p>
                          <i className="fas fa-car"/>
                          <p>{props.card.avg_commute_time}</p>
                      </CardDetail>
                  </TopTenCardFront>
              </TopTenCardSide>
          </TopTenBody>
      </TopTenCard>
  );
};

export default TopTenCards;
