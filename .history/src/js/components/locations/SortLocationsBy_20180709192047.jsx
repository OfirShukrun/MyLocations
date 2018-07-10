import React, { Component } from 'react'

export default class OrderLocationsBy extends Component {

  constructor(props) {
    super(props)
    this.state = { sortSelectValue: '' }
  }

  handleChange = (e) => {
    this.setState({ sortSelectValue: e.target.value }, () => this.sort())
  }

  sort = () => {
    const sortBy = this.state.sortSelectValue
    switch (sortBy) {
      case 'Date':
        this.sortByDate()
        break;
      case 'Name':
        this.sortByName()
        break;
      case 'Category':
        this.sortByCategory()
        break;
      default:
        break;
    }
  }

  sortByDate = () => {
    const locationsSortByDate = this.props.locations.sort((a, b) => {
      return a.id - b.id
    })
    this.props.sortByDate(locationsSortByDate)
  }

  sortByName = () => {
    const locationsSortByName = this.props.locations.sort(function (a, b) {
      const nameA = a.properties.name.toUpperCase();
      const nameB = b.properties.name.toUpperCase();
      return nameA > nameB
    })
    this.props.sortByName(locationsSortByName)
  }

  sortByCategory = () => {
    const locationsSortByCategory = this.props.locations.sort(function (a, b) {
      const categoryA = a.properties.selectedCategory
      const categoryB = b.properties.selectedCategory
      return categoryA > categoryB
    })
    this.props.sortByCategory(locationsSortByCategory)
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
      </div>
    )
  }
}
