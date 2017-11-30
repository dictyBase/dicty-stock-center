import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OauthSignInButton from 'components/OauthSignInButton'
import clientConfig from 'utils/clientConfig'
import { Flex, Box } from 'rebass'
import { DictyHeader } from 'styles'

const getDefaultProviders = () => {
    let providers = []
    for (let name in clientConfig) {
        providers.push(name)
    }
    return providers
}

export default class Login extends Component {
    displayName = 'login display'
    static propTypes = {
        providers: PropTypes.array
    }
    static defaultProps = {
        providers: getDefaultProviders()
    }
    constructor(props) {
        super(props)
    }
    renderOauthButtons = () => {
        const { providers } = this.props
        return providers.map((provider, index) => {
            return (
                <OauthSignInButton
                    provider={ provider }
                    key={ index }
                    {...this.props}
                />
            )
        })
    }
    render() {
        return (
            <Flex justify="center">
                <Box w={ [1, 1 / 2, 1 / 3] }>
                    <DictyHeader>
                        <h1>Log in</h1>
                    </DictyHeader>
                    { this.renderOauthButtons() }
                </Box>
            </Flex>
        )
    }
}
