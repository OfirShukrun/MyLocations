import React, { Component } from 'react';

export default class LocationsToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count=0
        }
        this.addLocation = this.addLocation.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this)
        this.editLocation = this.editLocation.bind(this)
    }

    addLocation(event) {
        event.preventDefault();
        const { name, address, longitude, latitude, selectedCategory } = this.props.term
        var obj = {
            id: 1 + Math.random(),
            term: {
                name,
                address,
                longitude,
                latitude,
                selectedCategory
            },
            isToggled: false
        };
        this.props.locations.push(obj)
        this.props.handleAddLocation();
    }

    deleteLocation() {
        const unselectedLocations = this.props.locations.filter(location => !location.isToggled);
        this.props.handleDeleteLocation(unselectedLocations);
    }

    editLocation() {
        const selectedLocation = this.props.locations.find(location => !!location.isToggled);
        const unselectedLocations = this.props.locations.filter(location => !location.isToggled);
        const selectedLocations = this.props.locations.filter(location => !!location.isToggled);
        this.props.handleEditLocation(selectedLocations, unselectedLocations, selectedLocation);
    }

    render() {
        return (
            <div className='locations-toolbar'>
                <button onClick={this.addLocation}>Add</button>
                <button onClick={this.deleteLocation}>Delete</button>
                <button onClick={this.editLocation}>Edit</button>
                <button onClick={this.logTerm}>logTerm</button>
            </div>
        )
    }
}


