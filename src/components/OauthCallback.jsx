import React, { Component } from 'react'

export default class OauthCallback extends Component {
    displayName = 'oauth callback component';
    componentDidMount() {
        const { location, params } = this.props
        window.opener.postMessage(
            {
                query: location.search,
                provider: params.provider,
                url: `${window.location.origin}${location.pathname}`
            },
            window.location)
        window.close()
    }
    render() {
        return (
            <div>
                <h2> Transfering to login system ........ </h2>
            </div>
        )
    }
}
