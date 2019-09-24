
import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Navigation from "../Navigation";
import axios from "axios";
import TopTenCards from "../TopTen/TopTenCards";


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: null, // Shows the active marker upon click
    selectedPlace: null, // Shows the infoWindow to the selected place upon a click
    citites: null
  };
  zoom = 5;
  location = { lat: 39.8283, lng: -101.2129 };
  onMarkerClick = (props, marker, e) => {
    this.zoom = props.map.zoom;
    setTimeout(() => {
      this.zoom = props.map.zoom < 8 ? 8 : props.map.zoom;
      this.setState(this.state);
      setTimeout(() => {
        this.zoom = props.map.zoom < 12 ? 12 : props.map.zoom;
        this.setState(this.state);
        this.getCities(false);
      }, 200);
    }, 200);
    this.location = { lat: marker.position.lat(), lng: marker.position.lng() };
    console.log(this.location);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  getCities = async (top = true) => {
    let getres = {
      model: {
        _id: null,
        name: null,
        short_name: null,
        location: null,
        cost_of_living: null,
        avg_commute_time: null,
        photo: null
      }
    };
    let url = top
      ? `https://stagebe.letsmovehomie.com/city/top/?filter=population&limit=200`
      : `https://stagebe.letsmovehomie.com/city/location/?lat=${
          this.location.lat
        }&lng=${this.location.lng}&limit=200&zoom=${this.zoom - 7}`;
    console.log(url);
    axios
      .post(url, getres)
      .then(res => {
        if (res.data.message) throw Error("no data");
        if (res.data.cities) res.data.data = res.data.cities;
        this.setState({ ...this.state, cities: res.data.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
        this.setState({ ...this.state, cities: [] });
      });
  };

  render() {
    if (!this.state.cities) {
      this.getCities();
    }
    const google = window.google; //this line is needed, please do not remove

    return (
      <>
        <Navigation />
        <Map
          google={this.props.google}
          className={"map"}
          zoom={this.zoom}
          center={this.location}
          onZoom={e => console.log(e)}
        >
          {this.state.cities
            ? this.state.cities.map(c => {
                if (!c.location) return null;
                return (
                  <Marker
                    key={c._id}
                    position={{
                      lat: parseFloat(c.location[1]),
                      lng: parseFloat(c.location[0])
                    }}
                    name={c.name}
                    title={c.name}
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
              {this.state.selectedPlace ? (
                <TopTenCards card={this.state.selectedPlace} />
              ) : (
                ""
              )}
              {/* <h4>{this.state.selectedPlace ? this.state.selectedPlace.name : ""}</h4> */}
            </div>
          </InfoWindow>
        </Map>
        <div
          style={{
            position: "fixed",
            top: "100px",
            display: this.state.cities ? "none" : "flex",
            alignItems: "center"
          }}
        >
          <h1 style={{ margin: "0 auto" }}>Please Wait... Loading</h1>
        </div>
        <div
          style={{
            position: "fixed",
            top: "100px",
            display: this.state.cities ? "none" : "flex",
            alignItems: "center"
          }}
        >
          <h1 style={{ margin: "0 auto" }}>Please Wait... Loading</h1>
        </div>
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBmTPYIKyBTfdxhV8Qa7fIkCaq2oqX-bmY"
})(MapContainer);

