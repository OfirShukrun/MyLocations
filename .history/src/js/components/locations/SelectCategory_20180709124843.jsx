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
        categories = JSON.parse(value)
        console.log(categories)
        return (
            <div>
                {categories.map(category =>
                    <p>{category.item}</p>
                )}
                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>


                    <option value="Restaurant">no</option>




                </select>
                <button onClick={() => console.log(this.props)}></button>

            </div>
        )
    }
}




