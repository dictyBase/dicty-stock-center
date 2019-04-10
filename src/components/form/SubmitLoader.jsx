// @flow
import React from "react"
import { Container } from "styles"
import { Flex } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CenteredBox } from "styles"

const SubmitLoader = () => (
  <Container>
    <Flex wrap justify="center">
      <CenteredBox>
        <h1>Please wait...</h1>
        <FontAwesomeIcon icon="spinner" size="5x" pulse mw />
      </CenteredBox>
    </Flex>
  </Container>
)

export default SubmitLoader
