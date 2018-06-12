import React, { Component } from 'react';
import Footer from './Footer';

class Locations extends Component {

    state = {
        name: '',
        address: '',
        longitude: '',
        latitude: '',
        locations: [],
        count: 0
    };

    /**
     * onChange function takes the event value from all of the inputs.
     */

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    toggle = (locationId) => () => {
        const locations = this.state.locations.map((location) => {
            if (location.id === locationId) {
                location.isToggled = !location.isToggled;
                return location;
            } else {
                return location;
            }
        });
        this.setState({ locations })
    };

    addLocation = (event) => {
        event.preventDefault();
        let obj = {
            id: this.state.count,
            name: this.state.name,
            address: this.state.address,
            longitude: this.state.longitude,
            latitude: this.state.latitude,
            category: this.state.category,
            isToggled: false
        };

        //It must be a better way to do that! \/

        if (obj.name === '' || obj.address === '' ||
            obj.longitude === '' || obj.latitude === '' ||
            obj.category === undefined) {
            alert('Please fill in all the fields to save a location')
        } else {
            this.state.locations.push(obj)
            this.setState({
                name: '',
                address: '',
                longitude: '',
                latitude: '',
                count: this.state.count + 1
            });
        }
    }

    deleteLocation = () => {
        const unselectedLocations = this.state.locations.filter(location => !location.isToggled)
        this.setState({
            locations: unselectedLocations
        })
    }

    sortByName = () => {
        const locationsSortByName = this.state.locations.sort(function (a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            return nameA > nameB
        })
        this.setState({
            locations: locationsSortByName
        })
    };

    sortByDate = () => {
        const locationsSortByDate = this.state.locations.sort((a, b) => {
            return a.id - b.id
        })
        this.setState({
            locations: locationsSortByDate
        })
    };

    sortByCategory = () => {
        const locationsSortByCategory = this.state.locations.sort(function (a, b) {
            const categoryA = a.category.toUpperCase();
            const categoryB = b.category.toUpperCase();
            return categoryA > categoryB
        })
        this.setState({
            locations: locationsSortByCategory
        })
    };

    logState = () => {
        console.log(this.state)
    }
    logProps = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div className="locations">
                <h1>Locations</h1>
                <div className='actions'>
                    <button className="delete" onClick={this.deleteLocation}>Delete</button>
                    <button className="edit" onClick={this.editLocation}>Edit</button>
                </div>
                <p>To add a new location, please fill in all the fields.
                </p>
                <form className="locationForm" onSubmit={this.addLocation}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>longitude</th>
                                <th>latitude</th>
                                <th>Category</th>
                            </tr>
                            <tr>
                                <td>
                                    <input name='name' value={this.state.name} onChange={this.onChange} />
                                </td>
                                <td>
                                    <input name='address' value={this.state.address} onChange={this.onChange} />
                                </td>
                                <td>
                                    <input name='longitude' type='number' value={this.state.longitude} onChange={this.onChange} />
                                </td>
                                <td>
                                    <input name='latitude' type='number' value={this.state.latitude} onChange={this.onChange} />
                                </td>
                                <td>
                                    <select id="dropdown" name='category' defaultValue={this.state.selectedCategory}
                                        onChange={this.onChange}>
                                        <option value="" disabled selected>Select Category</option>
                                        <option value="Restaurant">Restaurant</option>
                                        <option value="Mall">Mall</option>
                                    </select>
                                </td>
                            </tr>
                            {this.state.locations.map(({ id, term, isToggled, name, address
                                , longitude, latitude, category }) => {
                                return (
                                    <tr key={id}
                                        id={id}
                                        style={!isToggled ?
                                            { border: '' } : { border: '1px solid red' }
                                        }
                                        onClick={this.toggle(id)} >
                                        <td>
                                            <p>
                                                {name}
                                            </p>
                                        </td>
                                        <td>
                                            {address}
                                        </td>
                                        <td>
                                            {longitude}
                                        </td>
                                        <td>
                                            {latitude}
                                        </td>
                                        <td>
                                            {category}
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                    <button>Add</button>
                </form>
                <button onClick={this.logState}>Log State</button>
                <button onClick={this.logProps}>Log Props</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByDate}>Sort by Date</button>
                <button onClick={this.sortByCategory}>Sort by Category</button>
                <Footer />
            </div >
        );
    }
}

export default Locations;


