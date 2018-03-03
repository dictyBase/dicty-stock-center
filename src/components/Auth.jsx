// @flow
import React from "react"
import { Flex } from "rebass"
import FontAwesome from "react-fontawesome"
import { CenteredBox } from "styles"

/**
 * Loading screen during the login process
 */

const AuthLoader = () => {
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

export default AuthLoader
