// @flow
import React, { Component } from 'react'
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

type Props = {
    providers: Array<string>
}

export default class Login extends Component<Props> {
    displayName = 'login display'

    static defaultProps = {
        providers: getDefaultProviders()
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
