import React, {Component} from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';
import {GoogleMap} from './styled';
import Navigation from "../Navigation";

const mapStyles = {
    height:'50%'
};

export class MapContainer extends Component {
    render() {
        return (
            <GoogleMap>
                <Navigation/>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: -1.2884,
                        lng: 36.828233
                    }}
                />
            </GoogleMap>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBmTPYIKyBTfdxhV8Qa7fIkCaq2oqX-bmY'
})(MapContainer)