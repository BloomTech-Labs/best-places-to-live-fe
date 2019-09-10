import React from 'react';
import Navigation from '../Navigation';
import HomeSearchBar from '../HomeSearchBar';
import TopTenGrid from '../TopTen';

const Home = () => {
    return(
        <div>
            <Navigation />
            <HomeSearchBar />
            <TopTenGrid />
        </div>
    )
};

export default Home;

