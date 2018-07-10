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

    //Save state to local storage
    componentDidMount() {
        this.hydrateStateWithLocalStorage()
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        for (let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                let value = localStorage.getItem(key);
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        for (let key in this.state) {
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
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
        this.setState({ locations })
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
        var props = this.state
        return (
            <div>
                <Header page={'locations'} />
                <LocationsToolbar {...props}
                    handleAddLocation={this.handleAddLocation}
                    handleDeleteLocation={this.handleDeleteLocation}
                    handleEditLocation={this.handleEditLocation}
                />
                <LocationForm {...props}
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
                />
                <button onClick={this.logState}>Log General State</button>
            </div >
        );
    }
}




