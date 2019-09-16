import React, {useState, useEffect} from 'react'
import HomeSearchBar from '../HomeSearchBar'
import Navigation from '../Navigation'
import axios from 'axios' 

import 'dotenv'





const CityDetail = props => {

    const [city, setCity] = useState({})
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

    const fun = (idParam = '5d7c3420d62bb00e6c516a04') => {
        axios.post('https://stagebe.letsmovehomie.com/city/', {'ids':[idParam]})
        .then(
            (res) =>  {
                setCity(res.data[0])
                console.log(res)
            }
        )
        .catch(err  => {
            console.log(err)
        })
    }
    
    fun()

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
                    return   `${k} : ${city[k]}` 
                }) : <h3>Naaah!!</h3> }
            </div>
            
           

            {/* <Section> */}
                {/* <Nav></Nav> */}
                {/* <Scores /> */}
            {/* </Section> */}
        </>
    )
}

export default CityDetail
