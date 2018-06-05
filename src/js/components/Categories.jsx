import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
    state = {
        term: '',
        categories: [],
        count: 0,
        warning: '',
        plusText: 'Add'
    };

    toggle = (categoryId) => () => {
        const categories = this.state.categories.map((category) => {
            if (category.id === categoryId) {
                category.isToggled = !category.isToggled;
                return category;
            } else {
                return category;
            }
        });
        this.setState({ categories })
    };

    deleteCategory = () => {
        if (this.state.categories.some(category => !!category.isToggled)) {
            const unselectedCategories = this.state.categories.filter(category => !category.isToggled)
            this.setState({
                categories: unselectedCategories,
                warning: ''
            })
        } else {
            this.setState({
                warning: 'Please select category for deleting it'
            })
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    addCategory = (event) => {
        event.preventDefault();
        if (this.state.term === '') {
            this.setState({
                warning: 'Please name you category!'
            })
        } else {
            let obj = {
                id: this.state.count,
                term: this.state.term,
                isToggled: false
            };
            this.state.categories.push(obj)
            this.setState({
                term: '',
                count: this.state.count + 1,
                warning: ''
            });
        }
        if (this.state.plusText === 'Save') {
            this.setState({
                plusText: 'Add'
            })
        }
    }

    editCategory = () => {
        const selectedCategory = this.state.categories.find(category => !!category.isToggled);
        const unselectedCategories = this.state.categories.filter(category => !category.isToggled)
        const selectedCategories = this.state.categories.filter(category => !!category.isToggled)
        if (selectedCategories.length === 1) {
            this.setState({
                categories: unselectedCategories,
                term: selectedCategory.term,
                warning: 'Edit mode: please select a new name for your category',
                plusText: 'Save'
            })
        } else {
            this.setState({
                warning: 'Please select only one category for editing it'
            })
        }
    }

    logState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="categories">
                <h1>Categories</h1>
                <div className='actions'>
                    <button className="delete" onClick={this.deleteCategory}>Delete</button>
                    <button className="edit" onClick={this.editCategory}>Edit</button>
                </div>
                <p>To add a new category, please enter category name.
                </p>
                <form className="categoryForm" onSubmit={this.addCategory}>
                    <input value={this.state.term} onChange={this.onInputChange} />
                    <button>{this.state.plusText}</button>
                </form>
                {this.state.categories.map(({ id, term, isToggled }) =>
                    <button
                        key={id}
                        id={id}
                        style={!isToggled ?
                            { borderColor: '' } : { border: '2px solid red' }}
                        onClick={this.toggle(id)}>
                        {term}</button>)
                }
                <p>{this.state.warning}</p>
                <Link to="/">Go back to home page</Link>
                <button onClick={this.logState}>Log State</button>
            </div >
        );
    }
}

export default Categories;



