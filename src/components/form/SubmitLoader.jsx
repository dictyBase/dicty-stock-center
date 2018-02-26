// @flow
import React from "react"
import { Container } from "styles"
import { Flex } from "rebass"
import FontAwesome from "react-fontawesome"
import { CenteredBox } from "styles"

const SubmitLoader = () => {
  return (
    <Container>
      <Flex wrap justify="center">
        <CenteredBox>
          <h1>Please wait...</h1>
          <FontAwesome name="spinner" size="5x" pulse mw />
        </CenteredBox>
      </Flex>
    </Container>
  )
}

export default SubmitLoader
