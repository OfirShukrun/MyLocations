import React, { Component } from 'react';
import './popup.css'

export default class PopupProperties extends Component {

    render() {
        const { name, address, longitude, latitude, selectedCategory } = this.props.location
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <p>Name : {name}</p>
                    <p>Address : {address}</p>
                    <p>Longitude : {longitude}</p>
                    <p>Latitude : {latitude}</p>
                    <p>Selected category : {selectedCategory}</p>
                    <button onClick={this.props.closePopup}>Close location properties</button>
                </div>
            </div>
        )
    }
}
