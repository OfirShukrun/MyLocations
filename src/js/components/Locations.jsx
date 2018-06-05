import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Locations extends Component {
    state = {
        name: '',
        address: '',
        locations: [],
        count: 0
    };

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

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onAddressChange = (event) => {
        this.setState({
            address: event.target.value
        });
    };

    addLocation = (event) => {
        event.preventDefault();
        if (this.state.name === '') {
            alert('Please name your location!')
        } else {
            let obj = {
                id: this.state.count,
                name: this.state.name,
                address: this.state.address,
                isToggled: false
            };
            this.state.locations.push(obj)
            this.setState({
                name: '',
                address: '',
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

    logState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="locations">
                <h1>Locations</h1>
                <div className='actions'>
                    <button className="delete" onClick={this.deleteLocation}>Delete</button>
                    <button className="edit" onClick={this.editLocation}>Edit</button>
                </div>
                <p>To add a new location, please enter location name.
                </p>
                <form className="locationForm" onSubmit={this.addLocation}>
                    <p>Name : <input value={this.state.name} onChange={this.onNameChange} /></p>
                    <p>Address : <input value={this.state.address} onChange={this.onAddressChange} type="text" /></p>
                    <p>Cordinates : <input type="text" /></p>
                    <p>Category : <select></select></p>
                    <button>Add</button>
                </form>
                <table className="table">
                    <tbody className="table-body">
                        {this.state.locations.map(({ id, name, address, isToggled }) =>
                            <button key={id}
                                id={id}
                                style={!isToggled ?
                                    { borderColor: '' } : { borderColor: 'red' }}
                                onClick={this.toggle(id)}>
                                <tr>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {address}
                                    </td>
                                    <td>
                                        latitude: {'33'}
                                    </td>
                                    <td>
                                        long:  {'33'}
                                    </td>
                                    <td>
                                        {'category'}
                                    </td>
                                </tr></button>)}
                    </tbody>
                </table>


                <Link to="/">Go back to home page</Link>
                <button onClick={this.logState}>Log State</button>
            </div >
        );
    }
}

export default Locations;


