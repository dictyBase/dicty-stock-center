import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class Consumer extends Component {
    displayName = 'consumer info';

    static propTypes = {
        consumer: PropTypes.object,
        edit: PropTypes.func
    }
    render() {
        const { firstName, lastName, address, address2,
            city, state, zip, country
        } = this.props.consumer
        return (
            <div>
                <strong>Ship to:</strong>
                <div>{ firstName } { lastName }</div>
                <div>{ address }</div>
                <div>{ address2 && address2 }</div>
                <div>{ city } { state && state } { zip }</div>
                <div>{ country }</div>
                <a href="#" onClick = { this.props.edit }>Edit</a>
            </div>
        )
    }
}
