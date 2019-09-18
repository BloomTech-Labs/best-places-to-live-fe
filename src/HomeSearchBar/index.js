import React, {useState,useEffect} from 'react';
import { Container, SearchContainer } from './styled';
import {proxy} from "../App/constants";
import axios from "axios";





const HomeSearchBar = () => {
    const [input , setInput] = useState({
        searchTerm:""
    });
    const [searchResult, setsearchResult] = useState([]);

    const handleChange = event => {
        event.persist();
        setInput(inputs => ({
            ...inputs,
            [event.target.id]: event.target.value
        }));
    };

    const fetchSearch = (e) =>{
        e.preventDefault()
        axios
            .post(
                `https://stagebe.letsmovehomie.com/city/search`,
                 {searchTerm: input.searchTerm
                        })
            .then(res =>{

                setsearchResult(res.data.cities);


        })
            .catch(err =>{
                console.log(err);
            });
    };


  return (
    <Container>
      <SearchContainer>
        <h1> Discover a place you'll love to live</h1>
          <form onSubmit={fetchSearch}>
              <input
                  id='searchTerm'
                  label='Enter an Address, City, or Zip Code'
                  type='search'
                  value={input.searchTerm}
                  onChange={handleChange}
                  placeholder='Enter an Address, City, or Zip Code'

              />
          </form>
      </SearchContainer>
    </Container>
  );
};

export default HomeSearchBar;
