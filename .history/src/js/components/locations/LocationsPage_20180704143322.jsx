import React, { Component } from 'react';
import Header from '../static/Header';
import LocationForm from '../locations/LocationForm';
import LocationsToolbar from '../locations/LocationsToolbar';
import LocationsList from './LocationsList';

export default class Locations extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            longitude: '',
            latitude: '',
            selectedCategory: '',
            locations: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
        this.handleAddLocation = this.handleAddLocation.bind(this);
        this.handleDeleteLocation = this.handleDeleteLocation.bind(this);
        this.handleEditLocation = this.handleEditLocation.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleToggle(locations) {
        this.setState({ locations })
    }

    handleAddLocation() {
        this.setState({
            name: '',
            address: '',
            longitude: '',
            latitude: ''
        });
    }

    handleDeleteLocation(unselectedlocations) {
        if (this.state.locations.some(location => !!location.isToggled)) {
            this.setState({
                locations: unselectedlocations
            })
        }
    }

    handleEditLocation(selectedLocations, unselectedLocations, selectedLocation) {
        if (selectedLocations.length === 1) {
            const { name, address, longitude, latitude, selectedCategory } = selectedLocation
            this.setState({
                locations: unselectedLocations,
                name,
                address,
                longitude,
                latitude,
                selectedCategory,
            })
        }
    }

    sortByName = (locationsSortByName) => {
        this.setState({
            locations: locationsSortByName
        })
    };

    sortByDate = (locationsSortByDate) => {
        this.setState({
            locations: locationsSortByDate
        })
    };

    sortByCategory = (locationsSortByCategory) => {
        this.setState({
            locations: locationsSortByCategory
        })
    };

    logState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Header page={'locations'} />
                <LocationsToolbar {...this.state}
                    handleAddLocation={this.handleAddLocation}
                    handleDeleteLocation={this.handleDeleteLocation}
                    handleEditLocation={this.handleEditLocation}
                />
                <LocationForm {...this.state}
                    locations={this.state.locations}
                    handleChange={this.handleChange}
                    sortByDate={this.sortByDate}
                    sortByName={this.sortByName}
                    sortByCategory={this.sortByCategory}
                />
                <LocationsList locations={this.state.locations}
                    handleToggle={this.handleToggle} />
                <button onClick={this.logState}>Log State</button>
            </div >
        );
    }
}




