// @flow
import React, { Component } from "react"
import { Flex, Box } from "rebass"

type Props = {
  location: Object,
  match: Object,
}

// helper function to set redirect URL with basename if included
const redirectUrlGenerator = basename => {
  let url
  if (basename === "" || basename === "/") {
    url = `${window.location.origin}`
  } else if (basename.charAt(0) === "/") {
    url = `${window.location.origin}${basename}`
  } else {
    url = `${window.location.origin}/${basename}`
  }
  return url
}

/**
 * Callback that transfers the user to the login system
 */

export default class OauthCallback extends Component<Props> {
  componentDidMount() {
    window.opener.postMessage(
      {
        query: this.props.location.search,
        provider: this.props.match.params.provider,
        url: `${redirectUrlGenerator(process.env.REACT_APP_BASENAME)}${
          this.props.location.pathname
        }`,
      },
      window.location,
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
