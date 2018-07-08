import React, { Component } from 'react'

export default class OrderLocationsBy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sortSelectValue: 'Order By'
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.sort = this.sort.bind(this)
    this.sortByName = this.sortByName.bind(this);
    this.sortByCategory = this.sortByCategory.bind(this);
  }

  handleSelect(e) {

    this.setState({ sortSelectValue: e.target.value }, this.sort())
    e.preventDefault()
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
    const locationsSortByName = this.state.locations.sort(function (a, b) {
      const nameA = a.term.name.toUpperCase();
      const nameB = b.term.name.toUpperCase();
      return nameA > nameB
    })
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
          <option value="sortByDate">Date</option>
          <option value="sortByName">Name</option>
          <option value="sortByCategory">Category</option>
        </select>
        <button onClick={this.logState}>Log state</button>
      </div>

    )
  }
}
