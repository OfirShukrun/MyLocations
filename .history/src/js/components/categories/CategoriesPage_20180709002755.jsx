import React, { Component } from 'react';
import CategoriesToolbar from '../categories/CategoriesToolbar';
import CategoryList from './CategoryList';
import Header from '../static/Header';

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            categories: []
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    handleToggle = (categories) => {
        this.setState({ categories })
    }

    handleAddCategory = (categories) => {
        this.setState({
            term: '',
            categories
        });
    }

    handleDeleteCategory = (unselectedCategories) => {
        if (this.state.categories.some(category => !!category.isToggled)) {
            this.setState({
                categories: unselectedCategories
            })
        }
    }

    handleEditCategory = (selectedCategories, unselectedCategories, selectedCategory) => {
        if (selectedCategories.length === 1) {
            this.setState({
                categories: unselectedCategories,
                term: selectedCategory.term
            })
        }
    }

    logState = () => {
        console.log(this.state)
    }

    render() {
        const { term, categories, count } = this.state
        return (
            <div className="categories">
                <Header page={'categories'} />
                <CategoriesToolbar term={term} categories={categories}
                    count={count}
                    handleAddCategory={this.handleAddCategory}
                    handleDeleteCategory={this.handleDeleteCategory}
                    handleEditCategory={this.handleEditCategory}
                />
                <div className="category-input">
                    <input value={term} onChange={this.onInputChange} type="text" placeholder="Category" />
                </div>
                <CategoryList inputText={term}
                    categories={categories}
                    handleToggle={this.handleToggle}
                />
                <button onClick={this.logState}>Log</button>
            </div >
        );
    }
}








