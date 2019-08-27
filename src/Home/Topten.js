import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { CityCards, CardI,TopTen } from "./styled";
import Navigation from "../Navigation";


const Topten = () => {
    const [topTenList,settopTenList] = useState([])

    useEffect( () =>{
        const fetchTopTen = () =>{
            axios
                .get('https://demo0969329.mockable.io/topten')
                .then((res) => {
                    settopTenList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchTopTen();
    }, []);

    return (
    <div>
        <Navigation />
        <TopTen>TOP 10</TopTen>
        <CityCards>
            {topTenList.map((state) => (
            <CardI key={state._id}>{state.name}</CardI>
            ))}
        </CityCards>
    </div>
    )
}

export default Topten

