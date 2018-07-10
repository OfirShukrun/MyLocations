import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    renderSelectCategory = () => {
        var categories = JSON.parse(localStorage.getItem('categories'))
        return (
            <div>
                <select name='selectedCategory' value={this.props.selectCategory}
                    onChange={this.handleChange} >
                    {categories.map(category =>
                        <option key={category.id} value={category.term}>{category.term}</option>
                    )}
                </select>
            </div>
        )
    }

    renderNoCategories = () => {
        return (
            <p>Please add category</p>
        )
    }

    render() {
        var categories = JSON.parse(localStorage.getItem('categories'))
        var thereAreCategories = categories.length > 0
        return (
            <div>
                {thereAreCategories ?
                    this.renderSelectCategory :
                    this.renderNoCategories
                }
            </div>
        )
    }
}



