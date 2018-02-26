// @flow
import React from "react"
import { Flex } from "rebass"
import { CenteredBox } from "../styles"
import FontAwesome from "react-fontawesome"

type Props = {
  title: string,
  message: string
}

const TableLoader = (props: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <Flex justify="space-between">
        <CenteredBox>
          <h1>{props.title && props.title}</h1>
          <FontAwesome name="spinner" size="2x" pulse fixedWidth />
          {props.message && props.message}
        </CenteredBox>
      </Flex>
    </div>
  )
}

export default TableLoader
