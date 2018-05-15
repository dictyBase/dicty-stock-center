// @flow
import React from "react"
import { Flex, Box } from "rebass"

type ItemArray = {
  id: number,
  name: string
}

type Props = {
  items: Array<ItemArray>
}

const Items = (props: Props) => {
  const { items } = props
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

export default Items
