import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
    state = {
        term: '',
        categories: [],
        count: 0
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
        const unselectedCategories = this.state.categories.filter(category => !category.isToggled)
        this.setState({
            categories: unselectedCategories
        })
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    addCategory = (event) => {
        event.preventDefault();
        if (this.state.term === '') {
            alert('Please name your category!')
        } else {
            let obj = {
                id: this.state.count,
                term: this.state.term,
                isToggled: false
            };
            this.state.categories.push(obj)
            this.setState({
                term: '',
                count: this.state.count + 1
            });
        }
    }

    editCategory = () => {
        if (!this.state.checkboxState) {
            alert("Please choose category for editing it!")
        } else {
            return;
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
                    <button>Add</button>
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
                <Link to="/">Go back to home page</Link>
                <button onClick={this.logState}>Log State</button>
            </div >
        );
    }
}

export default Categories;



