
import React from 'react';

function CityCard(props){

    // passed props
    //props = img, cityName, cityState, population, costOfLiving
    return (
        <div className= 'city-card'>
            <img src={props.img}/>
            <p className='city-location'>{props.cityName}, {props.cityState}</p>
            <p className='population'>{props.population}</p>
            <p className='costOfLiving'> {props.costOfLiving} </p>
        </div>
    )
}

//will probably props drill city card, state will have array of cities for search results
export default CityCard; 