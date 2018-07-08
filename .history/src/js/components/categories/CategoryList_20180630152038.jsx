import React from 'react';

export default class CategoryList extends React.Component {

    toggle(categoryId) {
        const categories = this.props.categories.map((category) => {
            if (category.id === categoryId) {
                category.isToggled = !category.isToggled;
                return category;
            } else {
                return category;
            }
        });
        this.props.handleToggle(categories)
    }

    renderCategoryList() {
        const { categories } = this.props;
        return (
            <ul>{categories.map(category =>
                < li
                    key={category.id}
                    onClick={() => this.toggle(category.id)}
                    style={!category.isToggled ?
                        { borderColor: '' } : { border: '2px solid red' }}>
                    {category.term}
                </li>)}
            </ul>
        )
    }

    render() {
        const { categories } = this.props;
        const thereAreCategories = categories.length > 0
        return (
            <div className="category-list">
                {
                    thereAreCategories ?
                        this.renderCategoryList()
                        :
                        <p>Please add a new category</p>
                }
            </div>
        );
    }
}

