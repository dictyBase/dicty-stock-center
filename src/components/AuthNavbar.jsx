import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContainerFluid } from 'styles'
import 'styles/core.scss'

export default class AuthNavbar extends Component {
    displayName = 'navbar display';
    render() {
        return (
            <nav className="navbar navbar-default">
                <ContainerFluid>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Auth App</a>
                    </div>
                    <Link to="login" className="btn btn-default navbar-btn">Login</Link>
                </ContainerFluid>
            </nav>
        )
    }
}

