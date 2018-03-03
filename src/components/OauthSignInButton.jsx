// @flow
import React, { Component } from "react"
import oauthConfig from "utils/oauthConfig"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import { SocialButton } from "styles"

type Props = {
  provider: string,
  redirectUrl: string,
  oAuthLogin: Object
}

/**
 * Component that handles clicks for each social login button
 */

export default class OauthSignInButton extends Component<Props> {
  titleCase(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  onClick = (event: Event) => {
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
    window.open(
      url,
      provider,
      `width=${config.popupOptions.width},
                    height=${config.popupOptions.height}`
    )
  }
  render() {
    const { provider } = this.props
    const name = oauthConfig[provider]
      ? oauthConfig[provider].name
      : this.titleCase(provider)
    return (
      <Flex justify="center">
        <Box w={"90%"} mb={"5px"}>
          <SocialButton className={`${provider}`} onClick={this.onClick}>
            <FontAwesome name={`${provider}`} />&nbsp; Sign in with {name}
          </SocialButton>
        </Box>
      </Flex>
    )
  }
}
