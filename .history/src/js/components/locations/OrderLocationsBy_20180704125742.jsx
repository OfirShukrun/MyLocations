import React, { Component } from 'react'

export default class OrderLocationsBy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sortSelectValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.sort = this.sort.bind(this)
    this.sortByName = this.sortByName.bind(this);
    this.sortByCategory = this.sortByCategory.bind(this);
  }

  handleChange(e) {
    console.log('in handleChange')
    this.setState({ sortSelectValue: e.target.value }, () => this.sort())
  }

  sort(event) {
    if (this.state.sortSelectValue === 'Name') {
      this.sortByName()
    }
  }

  sortByName() {
    const locationsSortByName = this.props.locations.sort(function (a, b) {
      const nameA = a.term.name.toUpperCase();
      const nameB = b.term.name.toUpperCase();
      return nameA > nameB
    })
    this.props.sortByName(locationsSortByName)
  }

  sortByCategory() {

  }

  logState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <select value={this.state.sortSelectValue} onChange={this.handleChange} >
          <option value="" disabled selected>Order By</option>
          <option value="Date">Date</option>
          <option value="Name">Name</option>
          <option value="Category">Category</option>
        </select>
        <button onClick={this.logState}>Log Orderlocationsby state</button>
        <button onClick={this.sortByName}>Sort by name</button>
      </div>

    )
  }
}
