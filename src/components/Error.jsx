import React, { Component } from 'react'
import 'styles/core.scss'

export default class Error extends Component {
    displayName = 'homepage component';
    render() {
        const { auth, order } = this.props
        const orderError = order.error
        const authError = auth.error
        return (
            <div className="container">
                <div className="alert alert-danger text-center">
                    <h1><i className="fa fa-exclamation-triangle" ></i> Error</h1>
                    <h2>{ authError && authError }</h2>
                    <h2>{ orderError && orderError }</h2>
                </div>
            </div>
        )
    }
}
