import React, { Component } from 'react';

export default class SelectCategory extends Component {

    handleChange = (event) => {
        this.props.handleChange(event);
        console.log(this.props.categories)
    }

    renderSelectCategory = () => {

    }

    render() {
        const categories = localStorage.getItem(categories, JSON.parse(categories))
        console.log(categories)
        return (
            <div>

                <select name='selectedCategory' value={this.props.SelectCategory}
                    onChange={this.handleChange} >
                    <option value="" disabled selected>Select your Category</option>


                    <option value="Restaurant">dfg</option>


                </select>
                <button onClick={() => console.log(this.props)}></button>

            </div>
        )
    }
}



