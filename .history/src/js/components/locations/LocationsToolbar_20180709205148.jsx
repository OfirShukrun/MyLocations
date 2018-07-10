import React, { Component } from 'react';

//Handle valotation here!

export default class LocationsToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            editForm: false
        }
    }

    addLocation = (event) => {
        event.preventDefault();
        const { name, address, longitude, latitude, selectedCategory } = this.props
        var location = {
            id: this.state.count,
            name,
            address,
            longitude,
            latitude,
            selectedCategory,
            isToggled: false
        };
        this.setState({ count: this.state.count + 1 })
        this.props.locations.push(location)
        this.props.handleAddLocation();
    }

    deleteLocation = () => {
        const unselectedLocations = this.props.locations.filter(location => !location.isToggled);
        this.props.handleDeleteLocation(unselectedLocations);
    }

    editLocation = () => {
        this.setState({ editForm: !this.state.editForm })
        //Validate only one toggled location
        const selectedLocation = this.props.locations.filter(location => !!location.isToggled);
        console.log(selectedLocation)
        // const locations = this.state.locations.map(location => location.id === newLocation.id ? newLocation : location)
        // this.props.handleEditLocation(locations);
    }

    render() {
        return (
            <div className='locations-toolbar'>
                <button onClick={this.addLocation}>Add</button>
                <button onClick={this.deleteLocation}>Delete</button>
                <button onClick={this.editLocation}>Edit</button>
            </div>
        )
    }
}


