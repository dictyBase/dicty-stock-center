import React, { Component } from 'react'
import PropTypes from 'prop-types'
import oauthConfig from 'utils/oauthConfig'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'

export default class oauthSignInButton extends Component {
    displayName = 'oauth button component';
    static propTypes = {
        provider: PropTypes.string.isRequired,
        redirectUrl: PropTypes.string
    };
    componentDidMount() {
        window.addEventListener('message', this.onMessage, false)
    }
    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage)
    }
    titleCase(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    onMessage = (event) => {
        event.preventDefault()
        event.stopImmediatePropagation()
        this.props.authActions.oAuthLogin(event.data)
    };
    onClick = (event) => {
        event.preventDefault()
        const { provider } = this.props
        const config = oauthConfig[provider]
        let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
        url += `&scope=${config.scopes.join(config.scopeDelimiter)}`
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
            <Flex justify="center">
                <Box w={ '90%' } mb={ '5px' }>
                    <a
                        className={ `btn btn-block btn-social btn-lg btn-${provider}` }
                        onClick={ this.onClick }
                    >
                        <FontAwesome name={ `${provider}` } />
                        Sign in with { name }
                    </a>
                </Box>
            </Flex>

            // <SocialButton block large
            // className={ `btn-${provider}` }
            // onClick={ this.onClick }
            // >
            // <FontAwesome name={ `${provider}` } />&nbsp;
            // Sign in with { name }
            // </SocialButton>
        )
    }
}
