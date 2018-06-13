import React from "react"
import Skeleton from "react-loading-skeleton"
import { Flex, Box } from "rebass"
import { Container } from "styles"

const Loader = () => {
  return (
    <Container>
      <Flex justify="center">
        <Box w={1}>
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
        </Box>
      </Flex>
    </Container>
  )
}

export default Loader
