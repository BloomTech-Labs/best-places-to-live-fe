import React, { useState, useEffect } from "react";
import HomeSearchBar from "../HomeSearchBar";
import Navigation from "../Navigation";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MapView from "../GoogleMap";
import CircleImage from "./CircleImage";
import styled from "styled-components"
import "dotenv";
import GraphView from "./GraphView";

const CityDetail = props => {
  const [city, setCity] = useState(null);
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

  const fun = async (idParam = "5d816d7f0e65b13be4b04af5") => {
    axios
      .post("https://stagebe.letsmovehomie.com/city/", { ids: [idParam] })
      .then(res => {
        setCity(res.data.data[0]);
      })
      .catch(err => {
        console.log(err);
        props.history.push("/");
      });
  };
  var search = parseSearch(props.location.search);
  if (!city) {
    fun(search.id).then(() => console.log("hello"));
    return <div />;
  }
  let data = [
    {
      label: "Overall",
      value: city.score_total,
      grade: city.grade_total,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Commute",
      value: city.score_commute,
      grade: city.grade_commute,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Cost",
      value: city.score_cost_of_living,
      grade: city.grade_cost_of_living,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Education",
      value: city.score_education,
      grade: city.grade_education,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Healthcare",
      value: city.score_healthcare,
      grade: city.grade_healthcare,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Safety",
      value: city.score_safety,
      grade: city.grade_safety,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Economy",
      value: city.score_economy,
      grade: city.grade_economy,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Housing",
      value: city.score_housing,
      grade: city.grade_housing,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Taxation",
      value: city.score_taxation,
      grade: city.grade_taxation,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Culture",
      value: city["score_leisure_&_culture"],
      grade: city["grade_leisure_&_culture"],
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Tolerance",
      value: city.score_tolerance,
      grade: city.grade_tolerance,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Outdoors",
      value: city.score_outdoors,
      grade: city.grade_outdoors,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Enviromental",
      value: city.score_environmental_quality,
      grade: city.grade_environmental_quality,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Travel",
      value: city.score_travel_connectivity,
      grade: city.grade_travel_connectivity,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Business",
      value: city.score_business_freedom,
      grade: city.grade_business_freedom,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Startups",
      value: city.score_startups,
      grade: city.grade_startups,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Capitalism",
      value: city.score_venture_capital,
      grade: city.grade_venture_capital,
      type: "float",
      prefix: "",
      sufix: ""
    },
    {
      label: "Internet",
      value: city.score_internet_access,
      grade: city.grade_internet_access,
      type: "float",
      prefix: "",
      sufix: ""
    }
  ];
  return (
    <>
      <Navigation />
{/*       <HomeSearchBar /> */}
      <div style={{display: "flex", flexDirection: "column", alignItems:"center", maxWidth: "800px", margin: "0 auto"}}>
      <div style={{ minWidth: "100vw", minHeight: "400px", zIndex: "0", marginBottom: "-100px"}}>
        <MapView
          zoom={12}
          lat={city.location[1]}
          lng={city.location[0]}
          mainStyle={{ width: "100vw", height: "400px", /* maxWidth: "800px", */ margin:"0 auto"}}
          renderOne
          /* noNav */
        />
      </div>
      <div style={{zIndex: "1"}}>
      <CircleImage
        image={city.photo !== "" ? city.photo : city.grade_total}
        value={city.score_total}
        label={city.short_name}
        grade={city.grade_total}
        />
        </div>
      <div className="label" style={{fontSize: "4em", margin:"20px 0"}}>{city.short_name}</div> 
      <HorizontalBar/>
        <GraphView data={data} />
      <HorizontalBar/>
      {/* <div>
        {city ? (
          Object.keys(city).map(k => {
            if (k === "location") {
              return `${k}`;
            }
            return <div>{`${k} : ${city[k]}`}</div>;
          })
        ) : (
          <h3>Naaah!!</h3>
        )}
      </div> */}

      {/* <Section> */}
      {/* <Nav></Nav> */}
      {/* <Scores /> */}
      {/* </Section> */}
      </div>
    </>
  );
};

export default withRouter(CityDetail);

function parseSearch(search) {
  if (search[0] !== "?") return ""; //make sure this uses the search algorithem
  var str = search;
  var str = str.slice(1, str.length);
  var ret = {};
  str = str
    .split("=")
    .join("&")
    .split("&"); //normalize data
  while (str.length) {
    let name = str.shift();
    let val = str.shift();
    ret[name] = val;
  }
  return ret;
}

const HorizontalBar = styled.div `
    border-top: 5px solid #aaa;
    width: 100vw;
    max-width: 100%;
    margin: 20px;

`