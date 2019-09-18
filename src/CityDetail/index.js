import React, {useState, useEffect} from 'react'
import HomeSearchBar from '../HomeSearchBar'
import Navigation from '../Navigation'
import axios from 'axios' 

import 'dotenv'





const CityDetail = props  => {

    const [city, setCity] = useState(null)
    // useEffect((idParam) => {
    //         console.log(idParam)
    //         axios.post('https://stagebe.letsmovehomie.com/city/', {'ids':[idParam]})
    //         .then(
    //             (res) =>  {
    //                 setCity(res.data[0])
    //                 console.log(res)
    //             }
    //         )
    //         .catch(err  => {
    //             console.log(err)
    //         })
    // }, [])

    const fun = async (idParam = '5d7c3420d62bb00e6c516a04') => {
        axios.post('http://localhost:443/city/', {'ids': [idParam]})
        .then(
            (res) =>  {
                setCity(res.data.data[0])
                console.log(res);
            }
        )
        .catch(err  => {
            console.log(err)
        })
    }
    
    if(!city)fun().then(() => console.log("hello"))

    return (
        <>
            <Navigation />
            <HomeSearchBar />
            <div>
            {city ? Object.keys(city).map((k) => {
                    console.log(k)
                    if (k === 'location') {
                        return `${k}`
                    }
                    return   <div>{`${k} : ${city[k]}`}</div>
                }) : <h3>Naaah!!</h3> 
            }
            </div>
            
           

            {/* <Section> */}
                {/* <Nav></Nav> */}
                {/* <Scores /> */}
            {/* </Section> */}
        </>
    )
}

export default CityDetail
