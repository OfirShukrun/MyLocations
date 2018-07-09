import React, { Component } from 'react';
import Header from '../static/Header';
import LocationForm from '../locations/LocationForm';
import LocationsToolbar from '../locations/LocationsToolbar';
import LocationsList from './LocationsList';
import SortLocationsBy from './SortLocationsBy'

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
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleToggle = (locations) => {
        this.setState({ locations })
    }

    handleAddLocation = () => {
        this.setState({
            name: '',
            address: '',
            longitude: '',
            latitude: ''
        });
    }

    handleDeleteLocation = (unselectedlocations) => {
        if (this.state.locations.some(location => !!location.isToggled)) {
            this.setState({
                locations: unselectedlocations
            })
        }
    }

    handleEditLocation = (locations) => {
        console.log(locations, 'In Locations Page')
        this.setState({ locations: locations })
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

    renderLocationsPage = () => {
        if (this.props.passingCategories) {
            return (
                <div>Passing categories state</div>
            )
        } else {
            var props = this.state
            return (
                < div >
                    <Header page={'locations'} />
                    <LocationsToolbar {...props}
                        handleAddLocation={this.handleAddLocation}
                        handleDeleteLocation={this.handleDeleteLocation}
                        handleEditLocation={this.handleEditLocation}
                    />
                    <LocationForm {...props}
                        categories={this.props.categories}
                        locations={this.state.locations}
                        handleChange={this.handleChange}
                    />
                    <SortLocationsBy
                        locations={this.state.locations}
                        sortByName={this.sortByName}
                        sortByDate={this.sortByDate}
                        sortByCategory={this.sortByCategory}
                    />
                    <LocationsList locations={this.state.locations}
                        handleChange={this.handleChange}
                        handleToggle={this.handleToggle}
                        handleEditLocation={this.handleEditLocation}
                    />
                    <button onClick={this.logState}>Log General State</button>
                    <button onClick={() => console.log(this.props)}>Locations Page props</button>
                </div >
            )
        }
    }

    logState = () => {
        console.log(this.state)
    }

    render() {
        return (
            this.renderLocationsPage()
        );
    }
}




