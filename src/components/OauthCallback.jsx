import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'

export default class OauthCallback extends Component {
    displayName = 'oauth callback component';
    componentDidMount() {
        const { location } = this.props.routeProps
        window.opener.postMessage(
            {
                query: location.search,
                provider: this.props.match.params.provider,
                url: `${window.location.origin}${location.pathname}`
            },
            window.location)
        window.close()
    }
    render() {
        return (
            <Grid>
                <Cell width="1" align="center">
                    <h1>Transferring to login system ........</h1>
                </Cell>
            </Grid>
        )
    }
}
