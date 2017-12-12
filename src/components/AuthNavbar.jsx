import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContainerFluid } from 'styles'
import { DefaultButton } from 'styles/buttons'

export default class AuthNavbar extends Component {
    displayName = 'navbar display';
    render() {
        return (
            <nav className="navbar navbar-default">
                <ContainerFluid>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Auth App</a>
                    </div>
                    <DefaultButton>
                        <Link to="login">Login</Link>
                    </DefaultButton>
                </ContainerFluid>
            </nav>
        )
    }
}

