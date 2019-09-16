import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SavedCitiesContainer, SavedCityCardContainer } from './styled';
import CityCards from './cityCard';
import { proxy } from '../App/constants';

const SavedCities = () => {
  const [savedCitiesList, setSavedCitiesList] = useState([]);

  useEffect(() => {
    const fetchSavedCities = () => {
      axios
        .get(`${proxy}/city/topten-cost-of-living/`)
        .then(res => {
          setSavedCitiesList(res.data.cities);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchSavedCities();
  }, []);

  return (
    <SavedCitiesContainer>
      <SavedCityCardContainer>
        {savedCitiesList
          ? savedCitiesList.map(state => (
              <CityCards key={state.id} card={state} />
            ))
          : ''}
      </SavedCityCardContainer>
    </SavedCitiesContainer>
  );
};

export default SavedCities;
