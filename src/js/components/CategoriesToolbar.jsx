import React from 'react';

const CategoriesToolbar = (props) => (
    <div className='categories-toolbar'>
        <button className="delete" onClick={props.deleteCategory}>Delete</button>
        <button className="edit" onClick={props.editCategory}>Edit</button>
    </div>
)

export default CategoriesToolbar;