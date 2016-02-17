import React, { Component } from 'react'

export default class Error extends Component {
    displayName = 'homepage component';
    render() {
        const { error } = this.props.auth.error
        return (
            <div>
                <h1> Danger robinson danger </h1>
                <h2> Error { error } </h2>
            </div>
        )
    }
}
