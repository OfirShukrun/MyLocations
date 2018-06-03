import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Need to pass the id variable to the deleteCategory function

class Categories extends Component {
    state = {
        term: '',
        categories: [],
        checkboxState: false
    };
    toggle = ({ target: { id } }) => {
        this.setState({
            [id]: !this.state[id],
            checkboxState: true
        })
    };
    deleteCategory = () => {
        if (!this.state.checkboxState) {
            alert('Please select category to delete')
        } else {

        }
    }
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };
    pushSelectedCategory = () => {
    };
    addCategory = (event) => {
        event.preventDefault();
        if (this.state.term === '') {
            alert('Please name your category!')
        } else {
            this.setState({
                term: '',
                categories: [...this.state.categories, this.state.term]
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
                        id={index}
                        style={!this.state[index] ?
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



