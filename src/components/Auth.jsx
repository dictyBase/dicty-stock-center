import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router'
import 'styles/core.scss'

export class AuthLoader extends Component {
    displayName = 'loading component during authentication';
    render() {
        return (
            <div className="container">
                <Grid>
                    <Cell width="1" align="center">
                        <h1>Logging in...</h1>
                    </Cell>
                    <Cell width="1" align="center">
                        <i className="fa fa-5x fa-spinner fa-pulse fa-fw"></i>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export class Logout extends Component {
    displayName = 'logout confirmation';
    render() {
        return (
            <div className="container">
                <Grid>
                    <Cell width="1" align="center">
                        <div style={ {width: '100%'} } className="alert alert-success text-center">
                            <i className="fa fa-5x fa-check-circle-o"></i>
                            <h1>Logout successful!</h1>
                            <p>You have successfully logged out of Dicty Stock Center</p>
                        </div>
                    </Cell>
                    <Cell width="1" align="center">
                        <Link to="/" className="btn btn-lg btn-primary">
                            Stock Center Home
                        </Link>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
