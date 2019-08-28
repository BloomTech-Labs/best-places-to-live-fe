import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Navigation from "../Navigation";
import TopTenCards from "./TopTenCards";


const TopTen = () => {
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
            <div>TOP 10</div>
            <div>
                {topTenList.map((state) => (<TopTenCards key={state._id}  card={state}/>))}
            </div>
        </div>
    )
}

export default TopTen