import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    render() {
        var categories = JSON.parse(localStorage.getItem('categories'))
        return (
            <div>
                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    {categories.map(category =>
                        <option key={category.id} value={category.term}>{category.term}</option>
                    )}
                </select>
            </div>
        )
    }
}



