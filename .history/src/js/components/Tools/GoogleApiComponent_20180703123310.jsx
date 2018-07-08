import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const apiKey = 'AIzaSyB2HZSVhgwCrk6q65hQw0LwcFiSmh0_GzI';

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
    apiKey: (apiKey)
})(MapContainer)