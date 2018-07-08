import React, { Component } from 'react'
import LocationForm from './LocationForm';
import './popup.css';

export default class EditLocationPopup extends Component {

    render() {
        const { name, address, longitude, latitude, selectedCategory } = this.props
        var props = {
            name,
            address,
            longitude,
            latitude,
            selectedCategory
        }
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Edit Location</h1>
                    <LocationForm {...props}
                        {...this.props}
                    />
                    {this.props.id}
                    <button onClick={this.props.closePopup}>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}
