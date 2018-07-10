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

    logItemProps = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                {this.props.locations.map((location) {

                    return ([
                        <li
                            key={location.id}
                            onClick={() => this.toggle(location.id)}
                            style={!location.isToggled ?
                                { textDecoration: '' } : { textDecoration: 'underline' }}>
                            <h3>{location.name}</h3>
                            <p>{location.selectedCategory}</p>
                        </li>,
                        <li>
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
                        </li>
                    ])

                })}
                <button onClick={this.logItemProps}>Log LocationItem props</button>
            </div>
        )
    }
}
