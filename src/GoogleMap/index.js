
import React, { Component } from "react";
import Map, {Maps, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { mapStyles } from "./styled";
import Navigation from "../Navigation";
import axios from "axios";
import GraphView from "../CityDetail/GraphView";
import {withRouter} from "react-router-dom"


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: null, // Shows the active marker upon click
    selectedPlace: null, // Shows the infoWindow to the selected place upon a click
    citites: null
  };
  createMapOptions = (maps : Maps) => {
    console.log(maps);
    return {
      streetViewControl: false,
      scaleControl: true,
      fullscreenControl: false,
      styles: [{
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{
              visibility: "off"
          }]
      }],
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
      minZoom: 11,
      maxZoom: 18,

      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
          style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: maps.ControlPosition.BOTTOM_CENTER,
          mapTypeIds: [
              maps.MapTypeId.ROADMAP,
              maps.MapTypeId.SATELLITE,
              maps.MapTypeId.HYBRID
          ]
      },

      zoomControl: true,
      clickableIcons: false
  };
  }
  zoom = 5;
  transition = true;
  location = { lat: 39.8283, lng: -101.2129 };
  onMarkerClick = (props, marker, e) => {
    this.zoom = props.map.zoom;
    this.transition = true;
    setTimeout(() => {
      this.zoom = props.map.zoom < 8 ? 8 : props.map.zoom;
      this.transition = false;
      this.setState({...this.state});
      setTimeout(() => {
        this.zoom = props.map.zoom < 12 ? 12 : props.map.zoom;
        this.setState({...this.state});
        this.getCities(false);
      }, 200);
    }, 200);
    marker.activeid = parseInt(marker.title);
    console.log(parseInt(marker.title));
    this.location = { lat: marker.position.lat(), lng: marker.position.lng() };
    console.log(this.location);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

   data = (selectedPlace) => {
     return selectedPlace ?  [
    {
        label: "Overall",
        value: selectedPlace.score_total,
        grade: selectedPlace.grade_total,
        type: "float",
        prefix: "",
        sufix: ""
    },
    {
        label: "Commute",
        value: selectedPlace.score_commute,
        grade: selectedPlace.grade_commute,
        type: "float",
        prefix: "",
        sufix: ""
    },
    {
        label: "Cost",
        value: selectedPlace.score_cost_of_living,
        grade: selectedPlace.grade_cost_of_living,
        type: "float",
        prefix: "",
        sufix: ""
    },
    {
        label: "Education",
        value: selectedPlace.score_education,
        grade: selectedPlace.grade_education,
        type: "float",
        prefix: "",
        sufix: ""
    },
    {
        label: "Safety",
        value: selectedPlace.score_safety,
        grade: selectedPlace.grade_safety,
        type: "float",
        prefix: "",
        sufix: ""
    },
      ] : [];
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  getCities = async (top = true, limit=200) => {
    let getres = {
      model: {
        id: null,
        name: null,
        short_name: null,
        location: null,
        score_total: null,
        grade_total: null,
        score_commute: null,
        grade_commute: null,
        score_cost_of_living: null,
        grade_cost_of_living: null,
        score_education: null,
        grade_education: null,
        score_safety: null,
        grade_safety: null
      }
    };
    let url = top
      ? `https://stagebe.letsmovehomie.com/city/top/?filter=population&limit=${limit}`
      : `https://stagebe.letsmovehomie.com/city/location/?lat=${
          this.location.lat
        }&lng=${this.location.lng}&limit=${limit}&zoom=${this.zoom - 7}`;
    axios
      .post(url, getres)
      .then(res => {
        if (res.data.message) throw "no data";
        if (res.data.cities) res.data.data = res.data.cities;
        console.log(this.state.cities)
        if(this.state.cities && this.state.cities.length > 1)
          res.data.data = this.state.cities.concat(res.data.data.filter(x => this.state.cities.filter(y=> x.id === y.id).length < 1))
        console.log(res.data.data)
        setTimeout(()=>this.setState({ ...this.state, cities: res.data.data }), 500);
      })
      .catch(err => {
        console.log(err);
        this.setState({ ...this.state, cities: [] });
      });
  };
  componentWillMount()
  {
    this.location = this.props.lat && this.props.lng ? {lat: this.props.lat, lng: this.props.lng} : this.location;
    this.zoom = this.props.zoom ? this.props.zoom : this.zoom;
    let search = parseSearch(this.props.location.search);
    this.location.lat = search.lat ? parseInt(search.lat) : this.location.lat;
    this.location.lng = search.lng ? parseInt(search.lng) : this.location.lng;
    this.zoom = search.zoom ? parseInt(search.zoom) : this.zoom;    
  }
  render() {
    if (!this.state.cities && !this.props.renderOne) {
      this.getCities();
    }
    const google = window.google; //this line is needed dont remove
    let currentPlace = this.state.selectedPlace && this.state.activeMarker ? this.state.cities[this.state.activeMarker.activeid] : null;
    let mainStyle = this.props.mainStyle ? this.props.mainStyle : {}


    return (
      <div>
        {/* <Navigation /> */}
        <Map
          google={this.props.google}
          style={mainStyle}
          className={"map"}
          zoom={this.zoom}
          initialCenter={this.location}
          center={this.location}
          /* options={this.createMapOptions} */
        >
          {this.state.cities
            ? this.state.cities.map((c,i) => {
                if (!c.location) return null;
                return (
                  <Marker
                    key={i}
                    position={{
                      lat: parseFloat(c.location[1]),
                      lng: parseFloat(c.location[0])
                    }}
                    name={c.name}
                    title={String(i)}
                    onClick={this.onMarkerClick}
                  />
                );
              })
            : null}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              {currentPlace ? (
                <div  style={{width: this.props.zoom+"vw", minWidth: "300px", margin: "0 auto"}} onClick={()=> this.props.histor.push()} style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                  <a href={"/city/?id="+currentPlace.id}><h4>{currentPlace.short_name}</h4></a>
                <GraphView data={this.data(currentPlace)} maxWidth={"130%"} noTransition />
            </div>
              ) : (
                ""
              )}
              {/* <h4>{this.state.selectedPlace ? this.state.selectedPlace.name : ""}</h4> */}
            </div>
          </InfoWindow>
        </Map>
      {/*   <div
          style={{
            position: "relative",
            top: "100px",
            display: this.state.cities ? "none" : "flex",
            alignItems: "center"
          }}
        >
          <h1 style={{ margin: "0 auto" }}>Please Wait... Loading</h1>
        </div> */}
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmTPYIKyBTfdxhV8Qa7fIkCaq2oqX-bmY'
})(withRouter(MapContainer));


function parseSearch(search)
{
    if(search[0] !== "?") return ""; //make sure this uses the search algorithem
    var str = search;
    var str = str.slice(1, str.length);
    var ret = {};
    str = str.split("=").join("&").split("&"); //normalize data
    while(str.length)
    {
        let name = str.shift();
        let val = str.shift();
        ret[name] = val;
    }
    return ret
}