import React, { Component } from 'react'
import LocationForm from './LocationForm';
import './popup.css';

export default class EditLocationPopup extends Component {



    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Edit Location</h1>

                    <button>Cancel</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}
