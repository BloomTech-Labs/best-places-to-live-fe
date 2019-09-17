import React from 'react';
import { Container, SearchContainer } from './styled';

const HomeSearchBar = () => {
  return (
    <Container>
      <SearchContainer>
        <h1> Discover a place you'll love to live</h1>
        <input
          id='outlined-search'
          label='Enter an Address, City, or Zip Code'
          type='search'
          placeholder='Enter an Address, City, or Zip Code'
        />
      </SearchContainer>
    </Container>
  );
};

export default HomeSearchBar;
