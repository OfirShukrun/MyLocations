import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
        console.log(this.props.categories)
    }

    renderSelectCategory = () => {

    }

    render() {
        const categories = localStorage.getItem('categories')
        console.log(categories)
        return (
            <div>

                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>

                    {categories.map(category =>
                        <option value="Restaurant">{category.term}</option>
                    )}



                </select>
                <button onClick={() => console.log(this.props)}></button>

            </div>
        )
    }
}




