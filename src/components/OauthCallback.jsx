// add flow
import React, { Component } from "react"
import { Flex, Box } from "rebass"

export default class OauthCallback extends Component {
  componentDidMount() {
    window.opener.postMessage(
      {
        query: this.props.location.search,
        provider: this.props.match.params.provider,
        url: `${window.location.origin}${this.props.location.pathname}`
      },
      window.location
    )
    window.close()
  }
  render() {
    return (
      <Flex justify="center">
        <Box>
          <h1>Transferring to login system ........</h1>
        </Box>
      </Flex>
    )
  }
}
