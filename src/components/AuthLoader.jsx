import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class AuthLoader extends Component {
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
