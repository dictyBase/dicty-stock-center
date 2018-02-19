import React, { Component } from "react"
import { Flex } from "rebass"
import FontAwesome from "react-fontawesome"
import { CenteredBox } from "styles"

export default class AuthLoader extends Component {
  displayName = "loading component during authentication"
  render() {
    return (
      <Flex wrap justify="center">
        <CenteredBox>
          <h1>Logging in...</h1>
          <br />
          <FontAwesome name="spinner" size="5x" pulse fixedWidth />
        </CenteredBox>
      </Flex>
    )
  }
}
