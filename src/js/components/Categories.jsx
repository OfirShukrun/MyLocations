import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Header from './Header';
import Footer from './Footer';

/**
 * All of the categories are stored in an array - state.categories.
 * There are two modes for this unit that manipulated by the state object:
 * /1. editMode: true ; which is when the user chooses to edit category
 * /2. editMode: false ; Any other case.
 */

class Categories extends Component {

    state = {
        term: '',
        categories: [],
        count: 0,
        warning: '',
        plusText: 'Add',
        editMode: false
    };

    /**Defining the state term */

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    /**
     * The toggle function allow us to manipulate between the border color of each category.
     * The 'Edit' and the 'Delete' actions are able only when there is an category object with the property -
     * isToggled: true
     */

    toggle = (categoryId) => () => {
        if (this.state.editMode === false) {
            const categories = this.state.categories.map((category) => {
                if (category.id === categoryId) {
                    category.isToggled = !category.isToggled;
                    return category;
                } else {
                    return category;
                }
            });
            this.setState({ categories })
        } else {
            return;
        }
    };

    /**The user can add categories only when the term is at least one letter long */

    addCategory = (event) => {
        event.preventDefault();
        if (this.state.editMode === false || this.state.term.length !== 0) {
            if (this.state.term === '') {
                this.setState({
                    warning: 'Please name your category!'
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
                    warning: '',
                    editMode: false
                });
            }
            if (this.state.plusText === 'Save') {
                this.setState({
                    plusText: 'Add'
                })
            }
        } else {
            this.setState({
                plusText: 'Save'
            })
        }
    }

    deleteCategory = () => {
        const unselectedCategories = this.state.categories.filter(category => !category.isToggled)
        if (this.state.editMode === false) {
            if (this.state.categories.some(category => !!category.isToggled)) {
                this.setState({
                    categories: unselectedCategories,
                    warning: ''
                })
            } else {
                this.setState({
                    warning: 'Please select category for deleting it'
                })
            }
        } else {
            return;
        }
    }

    /**In editMode, all of the buttons are unabled. */

    editCategory = () => {
        const selectedCategory = this.state.categories.find(category => !!category.isToggled);
        const unselectedCategories = this.state.categories.filter(category => !category.isToggled)
        const selectedCategories = this.state.categories.filter(category => !!category.isToggled)
        if (this.state.editMode === false) {
            if (selectedCategories.length === 1) {
                this.setState({
                    categories: unselectedCategories,
                    term: selectedCategory.term,
                    warning: 'Edit mode : please write a new name for your category',
                    plusText: 'Save',
                    editMode: true
                })
                this.nameInput.focus();
            } else {
                this.setState({
                    warning: 'Please select only one category for editing it'
                })
            }
        } else {
            return;
        }
    }

    logState = () => {
        console.log(this.state)
    }

    render() {
        const { term, plusText, categories, warning } = this.state
        return (
            <div className="categories">
                <Header deleteCategory={this.deleteCategory} editCategory={this.editCategory} />
                <form className="categoryForm" onSubmit={this.addCategory}>
                    <input value={term} ref={(input) => { this.nameInput = input; }} onChange={this.onInputChange} />
                    <button>{plusText}</button>
                </form>
                {categories.map(categories =>
                    <CategoryList key={categories.id} {...categories}
                        toggle={this.toggle}
                    />)
                }
                <p>{warning}</p>
                <button onClick={this.logState}>Log State</button>
                <Footer />
            </div >
        );
    }
}

export default Categories;



