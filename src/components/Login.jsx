// @flow
import React, { Component } from "react"
import OauthSignInButton from "components/OauthSignInButton"
import clientConfig from "utils/clientConfig"
import { Flex, Box } from "rebass"
import { DictyHeader } from "styles"
import OauthSignHandler from "components/OauthSignHandler"

const getDefaultProviders = () => {
  let providers = []
  for (let name in clientConfig) {
    providers.push(name)
  }
  return providers
}

type Props = {
  /** List of the providers that the user can log into */
  providers: Array<string>
}

/**
 * Component that displays all of the social login buttons
 */

export default class Login extends Component<Props> {
  static defaultProps = {
    providers: getDefaultProviders()
  }
  renderOauthButtons = () => {
    const { providers } = this.props
    return providers.map((p, index) => {
      return <OauthSignInButton provider={p} key={index} {...this.props} />
    })
  }
  render() {
    return (
      <Flex justify="center">
        <Box w={[1, 1 / 2, 1 / 3]}>
          <DictyHeader>
            <h1>Log in</h1>
          </DictyHeader>
          {this.renderOauthButtons()}
          <OauthSignHandler />
        </Box>
      </Flex>
    )
  }
}
