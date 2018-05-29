import React from 'react';

const CategoryList = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default CategoryList;