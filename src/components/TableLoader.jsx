// @flow
import React from "react"
import { Flex } from "rebass"
import { CenteredBox } from "../styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  title?: string,
  message?: string,
}

const TableLoader = (props: Props) => {
  const { message, title } = props

  return (
    <div style={{ width: "100%" }}>
      <Flex justify="space-between">
        <CenteredBox>
          <h1>{title && title}</h1>
          <FontAwesomeIcon icon="spinner" size="2x" pulse fixedWidth />
          {message && message}
        </CenteredBox>
      </Flex>
    </div>
  )
}

export default TableLoader
