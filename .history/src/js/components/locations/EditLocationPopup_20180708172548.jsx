import React, { Component } from 'react'
import LocationForm from './LocationForm';
import './popup.css';

export default class EditLocationPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            address: this.props.address,
            longitude: this.props.longitude,
            latitude: this.props.latitude
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveEditedLocation = this.saveEditedLocation.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    saveEditedLocation() {
        const { name, address, longitude, latitude } = this.state
        var id = this.props.id
        var newLocation = {
            id,
            properties: {
                name,
                address,
                longitude,
                latitude
            },
            isToggled: false
        }
        console.log(newLocation)
        this.props.handleEditLocation(newLocation)
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
                    <button onClick={() => console.log(this.props)}>Log Props</button>
                </div>
            </div>
        )
    }
}
