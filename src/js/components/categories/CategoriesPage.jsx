import React, { Component } from 'react';
import CategoriesToolbar from '../categories/CategoriesToolbar';
import CategoryList from './CategoryList';
import Header from '../static/Header';

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '', categories: [] }
    }

    //Save state to local Storage
    componentDidMount() {
        this.hydrateStateWithLocalStorage.bind(this);
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
    //End

    onInputChange = ({ target: { value: term }}) => {
        this.setState({ term });
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
                <button onClick={this.logState}>Log</button>
            </div >
        );
    }
}








