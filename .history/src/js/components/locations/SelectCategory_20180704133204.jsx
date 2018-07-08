import React, { Component } from 'react';

export default class SelectCategory extends Component {

    constructor(props) {
        super(props);

        state = {
            selectedCategoryValue: ''
        }
    }


    handleChange = (event) => {
        this.props.handleChange(event)
    }

    logProps = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                {/* manage multiple categories selection */}
                <select name='selectedCategory' value={this.props.term.SelectCategory}
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




