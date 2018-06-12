import React from 'react';

class CategoryList extends React.Component {

    logProps = () => {
        console.log(this.props)
    }

    render() {
        const { id, term, isToggled, toggle } = this.props
        return (
            <div className="category">
                <button
                    id={id}
                    style={!isToggled ?
                        { borderColor: '' } : { border: '2px solid red' }}
                    onClick={toggle(id)}>
                    {term}
                </button>
                <button onClick={this.logProps}>Log Props</button>
            </div>
        );
    }
}

export default CategoryList;