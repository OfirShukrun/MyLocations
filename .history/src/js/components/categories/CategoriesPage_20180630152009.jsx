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
        this.onInputChange = this.onInputChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this)
        this.handleDeleteCategory = this.handleDeleteCategory.bind(this)
        this.handleEditCategory = this.handleEditCategory.bind(this)
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    handleToggle(categories) {
        this.setState({ categories })
    }

    handleAddCategory(categories) {
        this.setState({
            term: '',
            categories
        });
    }

    handleDeleteCategory(unselectedCategories) {
        if (this.state.categories.some(category => !!category.isToggled)) {
            this.setState({
                categories: unselectedCategories
            })
        }
    }

    handleEditCategory(selectedCategories, unselectedCategories, selectedCategory) {
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








