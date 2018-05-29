import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            categories: []
        };
        const warning = 1111
    }
    onChange = (event) => {
        this.setState({ term: event.target.value });
    }
    addCategory = (event) => {
        if (this.state.term == '') {
            return true;
        } else {
            event.preventDefault();
            this.setState({
                term: '',
                categories: [...this.state.categories, this.state.term]
            });
        }
    }
    editCategory = () => {

    }
    deleteCategory = (id) => {
        this.setState({
            categories: [this.state.categories[id]]
        })
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="categories">
                <h1>Categories</h1>
                <h1>{this.warning}</h1>
                <p>To add new category, please enter category name</p>
                <form className="App" onSubmit={this.addCategory}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>+</button>
                </form>
                <ul>
                    {this.state.categories.map((category, index) => <li key={index}>{category}</li>)}
                </ul>
                <div className='actions'>
                    <button className="delete" onClick={this.deleteCategory}>Delete</button>
                    <button className="edit">Edit</button>

                </div>
                <Link to="/">Go back to home page</Link>
            </div >
        );
    }
}

export default Categories;