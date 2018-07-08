import React, { Component } from 'react';
import EditLocationPopup from './EditLocationPopup';

//Handle valotation here!

export default class LocationsToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.addLocation = this.addLocation.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this)
        // this.editLocation = this.editLocation.bind(this)
    }

    addLocation(event) {
        event.preventDefault();
        const { name, address, longitude, latitude, selectedCategory } = this.props
        var obj = {
            id: this.state.count,
            properties: {
                name,
                address,
                longitude,
                latitude,
                selectedCategory
            },
            isToggled: false
        };
        this.setState({ count: this.state.count + 1 })
        this.props.locations.push(obj)
        this.props.handleAddLocation();
    }

    deleteLocation() {
        const unselectedLocations = this.props.locations.filter(location => !location.isToggled);
        this.props.handleDeleteLocation(unselectedLocations);
    }

    editLocation() {
        const selectedLocations = this.props.locations.filter(location => !!location.isToggled);
        const locations = this.state.locations.map(location => location.id === newLocation.id ? newLocation : location)
        this.props.handleEditLocation(locations);
    }

    render() {
        return (
            <div className='locations-toolbar'>
                <button onClick={this.addLocation}>Add</button>
                <button onClick={this.deleteLocation}>Delete</button>
                <button onClick={this.editLocation}>Edit</button>
                <EditLocationPopup />
            </div>
        )
    }
}


