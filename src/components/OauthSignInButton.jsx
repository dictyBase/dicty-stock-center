import React, { Component, PropTypes } from 'react'
import oauthConfig from 'utils/oauthConfig'
import 'styles/login.scss'

export default class oauthSignInButton extends Component {
    displayName = 'oauth button component';
    static propTypes = {
        provider: PropTypes.string.isRequired,
        redirectUrl: PropTypes.string
    };
    componentDidMount() {
        window.addEventListener('message', this.onMessage)
    }
    titleCase(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    onMessage = (event) => {
        console.log(event.data)
    };
    onClick = () => {
        const { provider } = this.props
        const config = oauthConfig[provider]
        let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
        if (config.requiredUrlParams) {
            config.requiredUrlParams.forEach(element => {
                url += `&${element[0]}=${element[1]}`
            })
        }
        if (config.optionalUrlParams) {
            config.optionalUrlParams.forEach(element => {
                url += `&${element[0]}=${element[1]}`
            })
        }
        url += `&redirect_uri=${config.redirectUrl}`
        window.open(url, provider, `width=${config.popupOptions.width},
                    height=${config.popupOptions.height}`)
    };
    render() {
        const { provider } = this.props
        const name = oauthConfig[provider] ? oauthConfig[provider].name : this.titleCase(provider)
        return (
            <a
                className={ `btn btn-block btn-social btn-lg btn-${provider}` }
                onClick={ this.onClick }
            >
                <i className={ `fa fa-${provider}` }></i>
                Sign in with { name }
            </a>
        )
    }
}
