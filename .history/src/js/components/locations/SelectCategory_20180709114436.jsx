import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    renderSelectCategory = () => {

    }

    render() {
        const { categories } = this.props
        return (
            <div>
                {categories.map(category =>
                    <select name='selectedCategory' value={this.props.SelectCategory}
                        onChange={this.handleChange} >
                        <option value="" disabled selected>Select your Category</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Mall">Mall</option>
                    </select>
                )}
            </div>
        )
    }
}




