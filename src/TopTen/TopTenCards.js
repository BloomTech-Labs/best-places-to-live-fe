import React from "react";
import {CardDetail, TopTenImg} from "./styled";

const TopTenCards = props => {
  return (
      <>

          <TopTenImg alt="Card-Image"src={props.card.photo} width="300px" height="200px" />
              <CardDetail>
                  <p>{props.card.name}</p>
          </CardDetail>
      </>

  );
};

export default TopTenCards;
