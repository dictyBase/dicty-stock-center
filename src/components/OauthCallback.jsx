import React, { Component } from 'react'

export default class OauthCallback extends Component {
    displayName = 'oauth callback component';
    componentDidMount() {
        const { location } = this.props
        window.opener.postMessage(location.search, window.location)
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
