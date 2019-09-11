import React from 'react';
import {Container, SearchBar, SearchContainer} from './styled';

const HomeSearchBar = () =>{

    return (
        <Container>
            <SearchContainer>
                <h1> Choose a place you'll love to live</h1>
            <SearchBar
                id="outlined-search"
                label="Enter an Address, City, or Zip Code"
                type="Search "
                placeholder="Enter an Address, City, or Zip Code"
            />
            </SearchContainer>
        </Container>
    );


}

export default HomeSearchBar;