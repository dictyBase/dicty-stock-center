import React from "react"
import Skeleton from "react-loading-skeleton"
import { Flex, Box } from "rebass"

const Loader = () => {
  return (
    <Flex justify="center">
      <Box w={"50%"}>
        <Skeleton count={10} />
        <br />
        <br />
        <Skeleton count={10} />
        <br />
        <br />
        <Skeleton count={10} />
      </Box>
    </Flex>
  )
}

export default Loader
