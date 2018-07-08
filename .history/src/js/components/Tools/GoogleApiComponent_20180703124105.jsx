import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const apiKey = 'AIzaSyB-uOiG4IH2bGccKrxr3swXNWktcAZiKiY';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>

                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey
})(MapContainer)