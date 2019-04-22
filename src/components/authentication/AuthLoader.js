// @flow
import React from "react"
import { Flex } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CenteredBox } from "styles"

/**
 * Loading screen during the login process
 */

const AuthLoader = () => (
  <Flex wrap justify="center">
    <CenteredBox>
      <h1>Logging in...</h1>
      <br />
      <FontAwesomeIcon icon="spinner" size="5x" pulse fixedWidth />
    </CenteredBox>
  </Flex>
)

export default AuthLoader
