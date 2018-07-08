import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        if (this.props.page === 'categories') {
            return (
                <div className="header">
                    <h1>Categories</h1>
                    <p>To add a new category, please enter category name.</p>
                </div>
            )
        } else if (this.props.page === 'locations') {
            return (
                <div className="header">
                    <h1>Locations</h1>
                    <p>To add a new locations, please fill in all the fileds.</p>
                </div>
            )
        }
    }
}
