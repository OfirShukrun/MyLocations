import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const apiKey = 'AIzaSyB-uOiG4IH2bGccKrxr3swXNWktcAZiKiY';

export class MapContainer extends Component {

    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: this.props.latitude,
                    lng: this.props.longitude
                }}
                zoom={15}
                onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Place</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey
})(MapContainer)