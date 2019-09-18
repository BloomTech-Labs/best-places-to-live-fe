import React from 'react'
import costofliving from "../images/budget.png";
import commute from "../images/travel.png";
import safety from "../images/police-car.png";
import tolerance from "../images/tolerance.png";
import {TopTenCardBack,CardIcon,ScoreColumn,TotalScore} from "./styled";


const TopTenBack = props =>  {
    return(
        <>
            <TopTenCardBack>

                <ScoreColumn>
                    <CardIcon src={costofliving}/>
                    {Math.round(props.card.score_cost_of_living)}
                </ScoreColumn>

                <ScoreColumn>
                    <CardIcon src={commute}/>
                    {Math.round(props.card.score_commute)}
                </ScoreColumn>

                <ScoreColumn>
                    <CardIcon src={safety}/>
                    {Math.round(props.card.score_safety)}
                </ScoreColumn>

                <ScoreColumn>
                    <CardIcon src={tolerance}/>
                    {Math.round(props.card.score_tolerance)}
                </ScoreColumn>

                <TotalScore>
                  Total Score:{Math.round(props.card.score_total)}
                </TotalScore>

            </TopTenCardBack>
        </>
    );
};

export default TopTenBack;