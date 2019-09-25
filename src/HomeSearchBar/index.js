import React, { useState } from "react";
import {Link} from "react-router-dom"
import { Container, SearchContainer, ButtonWrapper, Button } from "./styled";
import axios from "axios";

const HomeSearchBar = () => {
    const [input, setInput] = useState({
        searchTerm: ""
    });
    const [searchResult, setsearchResult] = useState([]);

    const handleChange = event => {
        event.persist();
        setInput(inputs => ({
            ...inputs,
            [event.target.id]: event.target.value
        }));
    };

    const fetchSearch = e => {
        e.preventDefault();
        axios
            .post(`https://stagebe.letsmovehomie.com/city/search/`, {
                searchTerm: input.searchTerm,
                model: {id: null, name: null}
            })
            .then(res => {
                setsearchResult(res.data.cities);
                console.log(res.data.cities);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Container>
            <SearchContainer>
                <h1> Discover a place you'll love to live</h1>
                <form onSubmit={fetchSearch}>
                    <input
                        id="searchTerm"
                        label="Enter City or State"
                        type="search"
                        value={input.searchTerm}
                        onChange={handleChange}
                        placeholder="Enter City or State"
                    />
                </form>
                {searchResult.length > 1 ? (
                    <ButtonWrapper>{searchResult.slice(0,10).map(city => (<Link to={`city/?id=${city._id}`}><Button key={city._id}>{city.name}</Button></Link>))}
                    </ButtonWrapper>) : (
                        <></>)}

            </SearchContainer>
        </Container>
    );
};

export default HomeSearchBar;
