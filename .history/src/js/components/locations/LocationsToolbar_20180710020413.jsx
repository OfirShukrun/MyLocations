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
            id: 1 + Math.random(),
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
        const selectedLocations = this.props.locations.filter(location => !!location.isToggled);
        if (selectedLocations.length === 1) {
            this.setState({
                showEditLocationPopup: !this.state.showEditLocationPopup
            });
        }
    }

    render() {

        return (
            <div className='locations-toolbar'>
                <button onClick={this.addLocation}>Add</button>
                <button onClick={this.deleteLocation}>Delete</button>

                <button onClick={this.toggleEditLocationPopup}>Edit</button>
                {this.props.locations.map(location =>
                    <div>
                        {this.state.showEditLocationPopup ?
                            <EditLocationPopup
                                {...this.props}
                                location={location}
                                closePopup={this.toggleEditLocationPopup}
                            />
                            : null
                        }
                    </div>
                )}
            </div>
        )
    }
}


