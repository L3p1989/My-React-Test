import React, {Component} from 'react';

class TestInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Patrick'
        };
    }

    render() {
        return (
            <div>
                <input
                value={this.state.name}
                onChange={(e) => {this.setState({name: e.target.value})}} />
            </div>
        );
    };
};

export default TestInput;