import React, { Component } from 'react';
import PopupProperties from './PopupProperties';
import ViewOnMap from './ViewOnMap';
import EditLocationPopup from './EditLocationPopup';

export default class LocationsList extends Component {

    constructor() {
        super();
        this.state = {
            showPropertiesPopup: false,
            showViewMapPopup: false,
            showEditLocationPopup: false
        };
        this.togglePropertiesPopup = this.togglePropertiesPopup.bind(this)
        this.toggleViewMapPopup = this.toggleViewMapPopup.bind(this);
        this.EditLocationPopup = this.EditLocationPopup.bind(this)
    }

    toggle(locationId) {
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

    togglePropertiesPopup() {
        this.setState({
            showPropertiesPopup: !this.state.showPropertiesPopup
        });
    }

    toggleViewMapPopup() {
        this.setState({
            showViewMapPopup: !this.state.showViewMapPopup
        });
    }

    toggleEditLocationPopup() {
        this.setState({
            EditLocationPopup: !this.state.EditLocationPopup
        })
    }

    logItemProps = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                {this.props.locations.map(location =>
                    <li
                        key={location.id}
                        onClick={() => this.toggle(location.id)}
                        style={!location.isToggled ?
                            { textDecoration: '' } : { textDecoration: 'underline' }}>
                        <h3>{location.properties.name}</h3>
                        <p>{location.selectedCategory}</p>

                        <button onClick={this.togglePropertiesPopup}>Location Properties</button>
                        {this.state.showPropertiesPopup ?
                            <PopupProperties location={location.properties}
                                closePopup={this.togglePropertiesPopup}

                            />
                            : null
                        }

                        <button onClick={this.toggleViewMapPopup}>View on Map</button>
                        {this.state.showViewMapPopup ?
                            <ViewOnMap
                                latitude={location.properties.latitude}
                                longitude={location.properties.longitude}
                                closePopup={this.toggleViewMapPopup}
                            />
                            : null
                        }

                        <button onClick={this.toggleEditLocationPopup}>Edit Location</button>
                        {this.state.showEditLocationPopup ?
                            <EditLocationPopup
                                closePopup={this.toggleEditLocationPopup}
                            />
                            : null
                        }
                    </li>
                )}
                <button onClick={this.logItemProps}>Log LocationItem props</button>
            </div>
        )
    }
}
