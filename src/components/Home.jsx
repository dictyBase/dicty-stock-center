import React, { Component } from 'react'

export default class Home extends Component {
    displayName = 'homepage component';
    render() {
        const { user } = this.props.auth
        return (
            <div>
                <h1> You are logged in </h1>
                <h2> As { user.name } with email { user.email } </h2>
            </div>
        )
    }
}
