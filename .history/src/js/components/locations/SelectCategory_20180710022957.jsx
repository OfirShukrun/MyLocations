import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    renderSelectCategory = () => {
        var categories = JSON.parse(localStorage.getItem('categories'))
        return (
            <div>
                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>
                    {categories.map(category =>
                        <option key={category.id} value={category.term}>{category.term}</option>
                    )}
                </select>
            </div>
        )
    }

    renderEditLocationSelect = () => {
        var categories = JSON.parse(localStorage.getItem('categories'))
        return (
            <div>
                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>
                    {categories.map(category =>
                        <option key={category.id} value={category.term}>{category.term}</option>
                    )}
                </select>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.editLocationSelect ?
                    this.renderEditLocationSelect()
                    :
                    this.renderSelectCategory()
                }
            </div>
        )
    }
}
