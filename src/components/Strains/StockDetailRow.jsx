import React, { Component } from "react"
import { Flex, Box } from "rebass"

export default class StrainDetailRow extends Component {
  render() {
    return (
      <Flex wrap justify="space-between">
        <Box w={"20%"} p={1}>
          <strong>{Object.keys(this.props.left)[0]}</strong>
        </Box>
        <Box w={"30%"} p={1}>
          {Object.values(this.props.left)[0]}
        </Box>
        <Box w={"20%"} p={1}>
          <strong>
            {this.props.right ? Object.keys(this.props.right)[0] : "\u00A0"}
          </strong>
        </Box>
        <Box w={"30%"} p={1}>
          {this.props.right && Object.values(this.props.right)[0]}
        </Box>
      </Flex>
    )
  }
}
