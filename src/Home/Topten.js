import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Navigation from "../Navigation";


const Topten = () => {
    const [topTenList,settopTenList] = useState([])

    useEffect( () =>{
        const fetchTopTen = () =>{
            axios
                .get('https://demo0969329.mockable.io/topten')
                .then((res) => {
                    console.log(JSON.stringify(res.data));
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
        <h1>TOP 10</h1>
        <div>
            {topTenList.map((state) => (
            <li key={state._id}>{state.name}</li>
            ))}
        </div>
    </div>
    )
}

export default Topten

