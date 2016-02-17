import React, { Component } from 'react'
import 'styles/core.scss'
import Logout from 'components/Logout'

export default class Navbar extends Component {
    displayName = 'navbar display';
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Auth App</a>
                    </div>
                    <Logout {...this.props} />
                </div>
            </nav>
        )
    }
}

