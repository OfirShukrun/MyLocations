import React, { Component } from 'react';

export default class SelectCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCategoryValue: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.props.handleChange(event.target.value);
    }

    render() {
        return (
            <div>
                {/* manage multiple categories selection */}
                <select name='selectedCategory' value={this.state.selectedCategoryValue}
                    onChange={this.handleChange} >
                    {/* {categories => categories.map(category => */}
                    <option value="" disabled selected>Select your Category</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Mall">Mall</option>
                    {/* )} */}
                </select>
                <button onClick={this.logProps}>Log select category props</button>
            </div>
        )
    }
}



