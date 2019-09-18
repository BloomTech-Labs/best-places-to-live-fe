import React, {useState, useEffect} from 'react'
import HomeSearchBar from '../HomeSearchBar'
import Navigation from '../Navigation'
import axios from 'axios' 

import 'dotenv'
import GraphView from './GraphView'





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

    const fun = async (idParam = '5d816d7f0e65b13be4b04af5') => {
        axios.post('https://stagebe.letsmovehomie.com/city/', {'ids': [idParam]})
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
    
    if(!city ){fun().then(() => console.log("hello")); return <div/>;}
    let data = [
        {
            label: "Overall",
            value: city.score_total,
            grade: city.grade_total,
            color: "#c2973a",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Commute",
            value: city.score_commute,
            grade: city.grade_commute,
            color: "#cad45b",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Cost",
            value: city.score_cost_of_living,
            grade: city.grade_cost_of_living,
            color: "#41cc72",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Education",
            value: city.score_education,
            grade: city.grade_education,
            color: "#41ccb0",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Healthcare",
            value: city.score_healthcare,
            grade: city.grade_healthcare,
            color: "#586dbf",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Safety",
            value: city.score_safety,
            grade: city.grade_safety,
            color: "#3385a6",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Economy",
            value: city.score_economy,
            grade: city.grade_economy,
            color: "#9a88eb",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Housing",
            value: city.score_housing,
            grade: city.grade_housing,
            color: "#8e59de",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Taxation",
            value: city.score_taxation,
            grade: city.grade_taxation,
            color: "#a158b0",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Culture",
            value: city["score_leisure_&_culture"],
            grade: city["grade_leisure_&_culture"],
            color: "#9e3485",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Tolerance",
            value: city.score_tolerance,
            grade: city.grade_tolerance,
            color: "#d481a8",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Outdoors",
            value: city.score_outdoors,
            grade: city.grade_outdoors,
            color: "#d4819e",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Enviromental",
            value: city.score_environmental_quality,
            grade: city.grade_environmental_quality,
            color: "#bf4765",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "travel",
            value: city.score_travel_connectivity,
            grade: city.grade_travel_connectivity,
            color: "#d42f42",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Business",
            value: city.score_business_freedom,
            grade: city.grade_business_freedom,
            color: "#bd4a4a",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Startups",
            value: city.score_startups,
            grade: city.grade_startups,
            color: "#c75434",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Capitalism",
            value: city.score_venture_capital,
            grade: city.grade_venture_capital,
            color: "#c27b5f",
            type: "float",
            prefix: "",
            sufix: ""
        },
        {
            label: "Internet",
            value: city.score_internet_access,
            grade: city.grade_internet_access,
            color: "#c2925f",
            type: "float",
            prefix: "",
            sufix: ""
        },
    ]
    return (
        <>
            <Navigation />
            <HomeSearchBar />
            <div style={{maxWidth: "600px", margin: "0 auto"}}>
                <GraphView data={data} />
            </div>
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
