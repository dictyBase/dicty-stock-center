import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class Logout extends Component {
    displayName = 'logout conmponent';
    static propTypes = {
        onLogoutClick: PropTypes.func.isRequired
    };

    render() {
        const { onLogoutClick } = this.props

        return (
            <button onClick={ () => onLogoutClick() } className="btn btn-primary">
                Logout
            </button>
        )
    }

}

