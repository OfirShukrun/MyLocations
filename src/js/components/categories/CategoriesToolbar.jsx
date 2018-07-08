import React, { Component } from 'react';

export default class CategoriesToolbar extends Component {

    addCategory(event) {
        event.preventDefault();
        const category = {
            id: 1 + Math.random(),
            term: this.props.term,
            isToggled: false
        };
        const categories = [...this.props.categories]
        categories.push(category)
        this.props.handleAddCategory(categories);
        if (this.props.term === '') {
            alert('!')
        }
    }

    deleteCategory() {
        const unselectedCategories = this.props.categories.filter(category => !category.isToggled);
        this.props.handleDeleteCategory(unselectedCategories);
    }

    editCategory() {
        const selectedCategory = this.props.categories.find(category => !!category.isToggled);
        const unselectedCategories = this.props.categories.filter(category => !category.isToggled);
        const selectedCategories = this.props.categories.filter(category => !!category.isToggled);
        this.props.handleEditCategory(selectedCategories, unselectedCategories, selectedCategory);
    }

    logTerm = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div className='categories-toolbar'>
                <button onClick={this.addCategory.bind(this)}>Add</button>
                <button onClick={this.deleteCategory.bind(this)}>Delete</button>
                <button onClick={this.editCategory.bind(this)}>Edit</button>
                <button onClick={this.logTerm}>logTerm</button>
            </div>
        )
    }
}


