import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/*Need to pass the id variable to the deleteCategory function*/


class Categories extends Component {
    state = {
        term: '',
        categories: [],
        count: 0,
    };

    toggle = (itemId) => () => {
        const categories = this.state.categories.map((item) => {
            if (item.id === itemId) {
                item.isToggled = !item.isToggled;
                return item;
            } else {
                return item;
            }
        });
        this.setState({ categories })
    };

    deleteCategory = () => {
        const unselectedCategories = this.state.categories.filter(item => !item.isToggled)
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
            console.log(`Add category, check state [BEFORE]`, this.state)
            this.state.categories.push(obj)
            this.setState({
                term: '',
                count: this.state.count + 1
            });
            console.log(`Add category, check state [AFTER] ${this.state}`)
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



