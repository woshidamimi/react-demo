import React, { Component, Fragment } from 'react';
class MyTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            count: this.state.count + 2,
        })
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick.bind(this)}>click</button>
                <span>{this.state.count}</span>
            </Fragment>
        )
    }
}
export default MyTest;