import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const apiKey = 'AIzaSyB-uOiG4IH2bGccKrxr3swXNWktcAZiKiY';

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

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
                    lat: 33,
                    lng: 33
                }}
                zoom={15}
                onClick={this.onMapClicked}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey
})(MapContainer)