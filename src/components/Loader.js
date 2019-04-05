import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Flex, Box } from "rebass"
import { Container } from "styles"

const Loader = () => (
  <Container>
    <Flex justify="center">
      <Box w={1}>
        <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={5} />
        </SkeletonTheme>
      </Box>
    </Flex>
  </Container>
)

export default Loader
