import React, { Component } from 'react';
import CategoriesToolbar from '../categories/CategoriesToolbar';
import CategoryList from './CategoryList';
import Header from '../static/Header';
import LocationsPage from '../locations/LocationsPage';

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            categories: []
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage()
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
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        for (let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                let value = localStorage.getItem(key);
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        for (let key in this.state) {
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
        const { term, categories } = this.state
        return (
            <div className="categories">
                <Header page={'categories'} />
                <CategoriesToolbar term={term} categories={categories}
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
                <LocationsPage />
                <button onClick={this.logState}>Log</button>
            </div >
        );
    }
}








