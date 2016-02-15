import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import 'styles/core.scss'

export default class Navbar extends Component {
    displayName = 'navbar display';
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    };

    render() {
        const { isAuthenticated } = this.props
        let button
        if (isAuthenticated) {
            button = (
                <Link to="logout" className="btn btn-default navbar-btn">Login</Link>
            )
        } else {
            button = (
                <Link to="login" className="btn btn-default navbar-btn">Login</Link>
            )
        }
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Auth App</a>
                    </div>
                    { button }
                </div>
            </nav>
        )
    }
}

