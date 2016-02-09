import React, { Component, PropTypes } from 'react'
import oauthConfig from 'utils/oauthConfig'
import 'styles/login.scss'

export default class oauthSignInButton extends Component {
    displayName = 'oauth button component';
    static propTypes = {
        provider: PropTypes.string.isRequired,
        redirectUrl: PropTypes.string
    };
    titleCase(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    render() {
        const { provider } = this.props
        const name = oauthConfig[provider] ? oauthConfig[provider].name : this.titleCase(provider)
        return (
            <a className={ `btn btn-block btn-social btn-lg btn-${provider}` }>
                <i className={ `fa fa-${provider}` }></i>
                Sign in with { name }
            </a>
        )
    }
}
