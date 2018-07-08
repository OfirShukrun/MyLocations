import React, { Component } from 'react'

export default class OrderLocationsBy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sortSelectValue: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.sort = this.sort.bind(this)
    this.sortByName = this.sortByName.bind(this);
    this.sortByCategory = this.sortByCategory.bind(this);
  }

  handleSelect(e) {
    this.setState({ sortSelectValue: e.target.value }, this.sort())
  }

  sort() {
    var sortBy = this.state.sortSelectValue
    console.log(sortBy)
    switch (sortBy) {
      case 'sortByDate':
        console.log('date');
        break;
      case 'sortByName':
        console.log('name')
        break; case 'sortByCategory':
        console.log('category')
        break;
      default:
        console.log('None')

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
        <select name="select-to-sort" value={this.state.sortSelectValue} onChange={this.handleSelect} >
          <option value="" disabled selected>Order By</option>
          <option value="ByDate">Date</option>
          <option value="ByName">Name</option>
          <option value="ByCategory">Category</option>
        </select>
        <button onClick={this.logState}>Log Orderlocationsby state</button>
        <button onClick={this.sortByName}>Sort by name</button>
      </div>

    )
  }
}
