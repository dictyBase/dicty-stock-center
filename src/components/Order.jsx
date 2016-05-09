import React, { Component } from 'react'
import 'styles/core.scss'

export default class Order extends Component {
    displayName = 'order parent component';

    render() {
        return (
            <div className="container">
                { this.props.children }
            </div>
        )
    }
}
