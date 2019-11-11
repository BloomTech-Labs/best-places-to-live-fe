
import React from 'react';

function CityCard(props){

    // passed props
    //props =  city {img, cityName, cityState, population, costOfLiving}
    return (
        <div className= 'city-card'>
            <img src={props.city.img}/>
            <p className='city-location'>{props.city.name}, {props.city.cityState}</p>
            <p className='population'>{props.city.population}</p>
            <p className='costOfLiving'> {props.city.costOfLiving} </p>
        </div>
    )
}

//will probably props drill city card, state will have array of cities for search results
export default CityCard; 