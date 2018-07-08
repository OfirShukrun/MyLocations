import React, { Component } from 'react';
import Map from '../Tools/GoogleApiComponent'
import './popup.css'

export default class ViewOnMap extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Map</h1>
                    <button onClick={this.props.closePopup}>Close</button>
                    <Map {...this.props} />

                </div>
            </div>
        )
    }
}

