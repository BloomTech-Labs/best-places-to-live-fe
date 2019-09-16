import React from 'react'
import {TopTenCardBack,TopTenCard,TopTenCardSide,TopTenBody} from './styled';


const TopTenBack = props =>  {
    return(
        <TopTenCard className = "card-container">
            <TopTenBody className = "card-body">
                <TopTenCardSide className = "card-side">
                    <TopTenCardBack className = "side-back">Hello World</TopTenCardBack>
                </TopTenCardSide>
            </TopTenBody>
        </TopTenCard>
    );
};

export default TopTenBack;