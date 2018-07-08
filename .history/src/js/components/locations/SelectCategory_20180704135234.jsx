import React, { Component } from 'react';

export default class SelectCategory extends Component {



    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div>
                <select name='selectedCategory'
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Mall">Mall</option>
                </select>
                <button onClick={this.logProps}>Log select category props</button>
            </div>
        )
    }
}




