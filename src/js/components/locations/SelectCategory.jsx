import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    renderCategoryOptions = category => (
        <option key={category.id} value={category.term}>
            { category.term }
        </option>
    )

    renderSelectCategory = () => {
        var categories = JSON.parse(localStorage.getItem('categories')) || []
        return (
            <div>
                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option defaultValue="" disabled>Select your Category</option>
                    { categories.map(this.renderCategoryOptions) }
                </select>
            </div>
        )
    }

    renderEditLocationSelect = () => {
        var categories = JSON.parse(localStorage.getItem('categories')) || []
        return (
            <div>
                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    { categories.map(this.renderCategoryOptions) }
                </select>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.editLocationSelect
                    ? this.renderEditLocationSelect()
                    : this.renderSelectCategory()
                }
            </div>
        )
    }
}
