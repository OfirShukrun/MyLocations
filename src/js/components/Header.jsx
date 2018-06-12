import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1>Categories</h1>
        <div className='categories-toolbar'>
            <button className="delete" onClick={props.deleteCategory}>Delete</button>
            <button className="edit" onClick={props.editCategory}>Edit</button>
        </div>
        <p>To add a new category, please enter category name.</p>
    </div>
)

export default Header;