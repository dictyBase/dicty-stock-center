import React, { Component } from 'react'

export default class AuthLoader extends Component {
    displayName = 'loading component during authentication';
    render() {
        return (
            <h2> Login in progress ........ </h2>
        )
    }
}
