import React from 'react';
import { connect } from 'react-redux';
import CityCard from './CityCard';
import Footer from './Footer';

function SearchResultsPage(props){

    //props = from state => displayedCities

    return(
        <div className='search-results'>
            <p className='search title'> Search Results</p>
            { props.displayedCities.map( city =>
                <CityCard city= {city} />
            )}
            <Footer/>
        </div>

    )
}

const mapStatetoProps = state => {
    return {
        displayedCities: state.displayedCities
    }
};

export default connect(mapStatetoProps)(SearchResultsPage);
