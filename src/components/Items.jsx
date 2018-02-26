// @flow
import React, { Component } from "react"
import { Flex, Box } from "rebass"

type ItemArray = {
  id: number,
  name: string
}

type Props = {
  items: Array<ItemArray>
}

export default class Items extends Component<Props> {
  render() {
    const { items } = this.props
    return (
      <div>
        <Flex wrap>
          <Box w={1 / 2}>
            <h5>ID</h5>
          </Box>
          <Box w={1 / 2}>
            <h5>Strain/Plasmid Name</h5>
          </Box>
        </Flex>
        {items.map((item, index) => {
          return (
            <Flex wrap key={index}>
              <Box w={1 / 2}>{item.id}</Box>
              <Box w={1 / 2}>{item.name}</Box>
            </Flex>
          )
        })}
      </div>
    )
  }
}
