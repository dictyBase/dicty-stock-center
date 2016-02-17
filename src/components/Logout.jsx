import React, { Component } from 'react'
import 'styles/core.scss'

export default class Logout extends Component {
    displayName = 'logout conmponent';
    render() {
        return (
            <button
                onClick={ () => this.props.authActions.logoutUser() }
                className="btn btn-default navbar-btn">
                Logout
            </button>
        )
    }
}

