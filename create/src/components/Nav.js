import React, { Component, Fragment } from 'react';
const navStyle = {
    background: 'red',
    width: '200px',
    height: '40px'
}
class Nav extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1,
            list: ['aa', 'bb', 'cc']
        }
    }
    handleClick () {
        this.setState({
            count: this.state.count + 2,
        })
    }
    render () {
        return (
            <Fragment>
                <div onClick={ this.handleClick.bind(this) } style={navStyle}>
                    <span>{ this.state.count }</span>
                </div>
                {
                    this.state.list.map((item) => {
                        return (
                        <div>{item}</div>
                        )
                    })
                }
            </Fragment>
        )
    }
}
export default Nav;