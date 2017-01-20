import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            clicks: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me!</button>
                <div>Has realizado {this.state.clicks} clicks</div>
            </div>
        )
    }
}

export default Counter;