import React, { Component } from 'react';

export default class SelectCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCategoryValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.pushSelectedCategory = this.pushSelectedCategory.bind(this)
    }

    handleChange = (event) => {
        this.setState({ selectedCategoryValue: event.target.value }, () => this.pushSelectedCategory())
    }

    pushSelectedCategory() {
        console.log(this.state.selectedCategoryValue)
        this.props.locations.term.SelectCategorypush(this.state.selectedCategoryValue)
    }

    render() {
        return (
            <div>
                {/* manage multiple categories selection */}
                <select name='selectedCategory' value={this.state.selectedCategoryValue}
                    onChange={this.handleChange} >
                    {/* {categories => categories.map(category => */}
                    <option value="" disabled selected>Select your Category</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Mall">Mall</option>
                    {/* )} */}
                </select>
                <button onClick={this.logProps}>Log select category props</button>
            </div>
        )
    }
}




