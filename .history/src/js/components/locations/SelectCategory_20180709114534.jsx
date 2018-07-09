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

                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>

                    {categories.map(category =>
                        <option value="Restaurant">{category.term}</option>
                    )}

                </select>

            </div>
        )
    }
}




