import React, { Component } from 'react';
import PopupProperties from './PopupProperties';
import ViewOnMap from './ViewOnMap';

export default class LocationsList extends Component {

    constructor() {
        super();
        this.state = {
            showPropertiesPopup: false,
            showViewMapPopup: false
        };
    }

    toggle = (locationId) => {
        const locations = this.props.locations.map((location) => {
            if (location.id === locationId) {
                location.isToggled = !location.isToggled;
                return location;
            } else {
                return location;
            }
        });
        this.props.handleToggle(locations)
    }

    togglePropertiesPopup = () => {
        this.setState({
            showPropertiesPopup: !this.state.showPropertiesPopup
        });
    }

    toggleViewMapPopup = () => {
        this.setState({
            showViewMapPopup: !this.state.showViewMapPopup
        });
    }

    render() {
        return (
            <div>
                {this.props.locations.map(location =>
                    ([
                        <li
                            key={location.id}
                            onClick={() => this.toggle(location.id)}
                            style={!location.isToggled ?
                                { textDecoration: '' } : { textDecoration: 'underline' }}>
                            <h3>{location.name}</h3>
                        </li>,
                        <p key={location.id}>{location.selectedCategory}</p>,
                        <div >
                            <button onClick={this.togglePropertiesPopup}>Properties</button>
                            {this.state.showPropertiesPopup ?
                                <PopupProperties location={location}
                                    closePopup={this.togglePropertiesPopup}
                                />
                                : null
                            }
                            <button onClick={this.toggleViewMapPopup}>View on Map</button>
                            {this.state.showViewMapPopup ?
                                <ViewOnMap
                                    latitude={location.latitude}
                                    longitude={location.longitude}
                                    closePopup={this.toggleViewMapPopup}
                                />
                                : null
                            }
                        </div>
                    ])
                )}
            </div>
        )
    }
}
