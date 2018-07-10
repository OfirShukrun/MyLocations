import React, { Component } from 'react'
import LocationForm from './LocationForm';
import './popup.css'

export default class EditLocationPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.name,
            address: this.props.location.address,
            longitude: this.props.location.longitude,
            latitude: this.props.location.latitude
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount = () => {
        this.saveEditedLocation()
    }


    saveEditedLocation = () => {
        var { locations } = this.props
        const { name, address, longitude, latitude } = this.state
        var id = this.props.location.id
        var newLocation = {
            id,
            name,
            address,
            longitude,
            latitude,
            selectedCategory: '',
            isToggled: false
        }
        var locations = locations.map(location => location.id === newLocation.id ? newLocation : location)
        this.props.handleEditLocation(locations)
    }

    render() {
        const { name, address, longitude, latitude } = this.state
        var props = { name, address, longitude, latitude }
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Edit Location</h1>
                    <LocationForm
                        handleChange={this.handleChange}
                        {...props}
                    />
                    {this.props.id}
                    <button onClick={this.props.closePopup}>Cancel</button>
                    <button onClick={this.saveEditedLocation}>Save</button>
                </div>
            </div>
        )
    }
}
