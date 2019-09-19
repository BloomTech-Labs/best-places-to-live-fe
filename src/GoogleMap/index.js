import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {mapStyles} from './styled';
import Navigation from "../Navigation";




export class MapContainer extends Component {
    state = {
        showingInfoWindow:false, // Hides or the shows the infoWindow
        activeMarker:{},         // Shows the active marker upon click
        selectedPlace:{}         // Shows the infoWindow to the selected place upon a click
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace:props,
            activeMarker:marker,
            showingInfoWindow:true
        });

    onClose = props => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };


    render() {
        return (
            <>
                <Navigation/>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{lat: 28.384778, lng: -81.564861}}
                >

                <Marker
                    la
                    onClick={this.onMarkerClick}
                    name={'YO Lets Move Homie!!'}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >

                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>

                </InfoWindow>

                </Map>

            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBmTPYIKyBTfdxhV8Qa7fIkCaq2oqX-bmY'
})(MapContainer)