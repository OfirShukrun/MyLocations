import React, { Component } from 'react';
import SelectCategory from './SelectCategory';
import SortLocationsBy from './SortLocationsBy';

export default class LocationForm extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let inputName = event.target.name;
        console.log(inputName)
        let inputValue = event.target.value;
        let stateCopy = Object.assign({}, this.props);
        stateCopy.term[inputName] = inputValue;
        this.props(stateCopy);
    }

    render() {
        const { name, address, longitude, latitude } = this.props.term
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>longitude</th>
                            <th>latitude</th>
                            <th>Select Category</th>
                        </tr>
                        <tr>
                            <td>
                                <input name='name' value={name} onChange={this.handleChange} />
                            </td>
                            <td>
                                <input name='address' value={address} onChange={this.handleChange} />
                            </td>
                            <td>
                                <input name='longitude' type='number' value={longitude} onChange={this.handleChange} />
                            </td>
                            <td>
                                <input name='latitude' type='number' value={latitude} onChange={this.handleChange} />
                            </td>
                            <td>
                                <SelectCategory {...this.props}
                                    handleChange={this.handleChange} />
                            </td>
                            <td>
                                <SortLocationsBy {...this.props} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
