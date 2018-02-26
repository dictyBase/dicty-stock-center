// @flow
import React from "react"
import { Flex, Box } from "rebass"

type Props = {
  left: Object,
  right: Object
}

const StrainDetailRow = (props: Props) => {
  return (
    <Flex wrap justify="space-between">
      <Box w={"20%"} p={1}>
        <strong>{Object.keys(props.left)[0]}</strong>
      </Box>
      <Box w={"30%"} p={1}>
        {Object.values(props.left)[0]}
      </Box>
      <Box w={"20%"} p={1}>
        <strong>{props.right ? Object.keys(props.right)[0] : "\u00A0"}</strong>
      </Box>
      <Box w={"30%"} p={1}>
        {props.right && Object.values(props.right)[0]}
      </Box>
    </Flex>
  )
}

export default StrainDetailRow
