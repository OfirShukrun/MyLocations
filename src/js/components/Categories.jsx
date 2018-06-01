import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            categories: [],
            selectedCategories: [],
            checkboxState: false
        };
    }
    toggle = (event) => {
        const id = event.target.id;
        this.setState({
            [id]: !this.state[id],
            checkboxState: true
        })
    };
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };
    pushSelectedCategory = () => {
    };
    addCategory = (event) => {
        if (this.state.term === '') {
            alert('Please name your category!')
            event.preventDefault();
        } else {
            this.setState({
                term: '',
                categories: [...this.state.categories, this.state.term]
            });
            event.preventDefault();
        }
    }
    logState = () => {
        console.log(this.state)
    }
    deleteCategory = () => {
        if (this.state.checkboxState === false) {
            alert('Please choose category for deleting it!')
        } else {
            this.setState({
                selectedCategories: this.state.categories
            });
        }
    }
    editCategory = () => {
        if (this.state.checkboxState === false) {
            alert("Please choose category for editing it!")
        } else {
            return;
        }
    }
    render() {
        return (
            <div className="categories">
                <h1>Categories</h1>
                <div className='actions'>
                    <button className="delete" onClick={this.deleteCategory}>Delete</button>
                    <button className="edit" onClick={this.editCategory}>Edit</button>

                </div>
                <p>To add new category, please enter category name</p>
                <form className="categoryForm" onSubmit={this.addCategory}>
                    <input value={this.state.term} onChange={this.onInputChange} />
                    <button>Add</button>
                </form>

                {this.state.categories.map((category, index) =>
                    < button
                        key={index}
                        id={`checkboxState${index}`}
                        style={!this.state[`checkboxState${index}`] ?
                            { borderColor: '' } : { border: '2px solid red' }}
                        onClick={this.toggle}>
                        {category}</button>)
                }
                <Link to="/">Go back to home page</Link>
                <button onClick={this.logState}>Log State</button>
            </div >
        );
    }
}

export default Categories;



