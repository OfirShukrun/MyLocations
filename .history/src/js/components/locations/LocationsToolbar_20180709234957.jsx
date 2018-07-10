import React, { Component } from 'react';
import EditLocationPopup from './EditLocationPopup';

//Handle valotation here!

export default class LocationsToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditLocationPopup: false
        }
    }

    addLocation = (event) => {
        event.preventDefault();
        const { name, address, longitude, latitude, selectedCategory } = this.props
        var location = {
            id: 2 + Math.random(),
            name,
            address,
            longitude,
            latitude,
            selectedCategory,
            isToggled: false
        };
        this.props.locations.push(location)
        this.props.handleAddLocation();
    }

    deleteLocation = () => {
        const unselectedLocations = this.props.locations.filter(location => !location.isToggled);
        this.props.handleDeleteLocation(unselectedLocations);
    }

    toggleEditLocationPopup = () => {
        //Validate only one toggled location
        this.setState({
            showEditLocationPopup: !this.state.showEditLocationPopup
        });
        const selectedLocation = this.props.locations.filter(location => !!location.isToggled);
        // const locations = this.state.locations.map(location => location.id === newLocation.id ? newLocation : location)
        // this.props.handleEditLocation(locations);
    }

    render() {
        var location = 'BBB'
        return (
            <div className='locations-toolbar'>
                <button onClick={this.addLocation}>Add</button>
                <button onClick={this.deleteLocation}>Delete</button>

                <button onClick={this.toggleEditLocationPopup}>Edit</button>
                {this.state.showEditLocationPopup ?
                    <EditLocationPopup location={location}
                        closePopup={this.toggleEditLocationPopup}
                    />
                    : null
                }
            </div>
        )
    }
}


