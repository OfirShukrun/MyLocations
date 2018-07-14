import React, { Component } from 'react';
import LocationItem from './LocationItem';

export default class LocationsList extends Component {

    renderLocationsList() {
        return (
            <ul className="location-list">
                <LocationItem {...this.props} />
            </ul>
        );
    }

    render() {
        const thereAreLocations = this.props.locations.length > 0
        return (
            <div className="category-list">
                {
                    thereAreLocations
                        ? this.renderLocationsList()
                        : <p>Please fill in all the fields in order to create a new location</p>
                }
            </div>
        );
    }
}





