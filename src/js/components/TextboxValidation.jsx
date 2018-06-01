import React from 'react';

class Textbox extends React.Component {
    constructor() {
        super()
        this.name = ""
    }

    render() {
        return (
            <div>
                <input
                    tabIndex="1"
                    id={'Name'}
                    name="Name"
                    type="text"
                    value={name}
                    placeholder="Place your name here ^-^"
                    onChange={name => this.setState({ name })}
                    onBlur={() => { }}
                    validationOption={{
                        name: 'Name',
                        check: true,
                        required: true
                    }}
                />
            </div>

        )
    }
}


export default Textbox;