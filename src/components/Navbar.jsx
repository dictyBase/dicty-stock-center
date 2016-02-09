import React, { Component, PropTypes } from 'react'
import Logout from 'components/Logout'
import { logoutUser } from '../actions/auth'
import 'styles/core.scss'

export default class Navbar extends Component {
    displayName = 'navbar display';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string
    };

    render() {
        const { dispatch, isAuthenticated } = this.props
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Auth App</a>
                <div className="navbar-form">
                    { isAuthenticated &&
                        <Logout onLogoutClick={ () => dispatch(logoutUser()) }/>
                    }
                </div>
            </div>
            </nav>
        )
    }
}

