import React, { Component } from 'react'
import LocationForm from './LocationForm';
import './popup.css';

export default class EditLocationPopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <LocationForm />
                </div>
            </div>
        )
    }
}