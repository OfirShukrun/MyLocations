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
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Edit Location</h1>
                    <LocationForm
                        handleChange={this.handleChange}
                        name={this.state.name}
                    />
                    {this.props.id}
                    <button onClick={this.props.closePopup}>Cancel</button>
                    <button>Save</button>
                    <button onClick={() => console.log(this.state)}>Log State</button>
                </div>
            </div>
        )
    }
}
