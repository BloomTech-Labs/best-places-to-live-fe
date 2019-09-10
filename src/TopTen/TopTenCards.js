import React from "react";


const TopTenCards = props => {
  return (
    <div>
      <div>
        <div
          component="img"
          alt="City Image"
          height="140"
          title="City Image"
          src={props.card.photo}
        />
        <div>
          <div>{props.card.name}</div>
        </div>
      </div>
      <div>
        <div >
          <div />
          {props.card.cost_of_living}
        </div>
        <div>
          {Math.round(props.card.avg_commute_time)}
        </div>
      </div>
    </div>
  );
};

export default TopTenCards;
