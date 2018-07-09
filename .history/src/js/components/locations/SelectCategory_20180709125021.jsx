import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
        console.log(this.props.categories)
    }

    renderSelectCategory = () => {

    }

    render() {
        const value = localStorage.getItem('categories')
        var categories = JSON.parse(value)
        console.log(categories)
        return (
            <div>

                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>

                    {categories.map(category =>
                        <option value="{category.term}">{category.term}</option>
                    )}





                </select>
                <button onClick={() => console.log(this.props)}></button>

            </div>
        )
    }
}




