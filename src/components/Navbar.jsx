import React, { Component, PropTypes } from 'react'
import Login from 'components/Login'
import Logout from 'components/Logout'
import { loginUser, logoutUser } from '../actions/auth'
import 'styles/vendor/bootstrap.css'

export default class Navbar extends Component {
    displayName = 'navbar display';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string
    };

    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Auth App</a>
                <div className="navbar-form">

                { !isAuthenticated &&
                     <Login
                       errorMessage={ errorMessage }
                       onLoginClick={ creds => dispatch(loginUser(creds)) }/>
                }

                { isAuthenticated &&
                    <Logout onLogoutClick={ () => dispatch(logoutUser()) }/>
                }

             </div>
           </div>
         </nav>
        )
    }
}

