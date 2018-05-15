// @flow
import React from "react"
import { Flex } from "rebass"
import { BorderBox } from "styles"
import FontAwesome from "react-fontawesome"

type Props = {
  phenotype: string,
  notes: string,
  reference: string
}

const PhenotypeRow = (props: Props) => {
  return (
    <Flex wrap justify="center">
      <BorderBox w={"30%"} p={1}>
        {props.phenotype}
      </BorderBox>
      <BorderBox w={"30%"} p={1}>
        {props.notes}
      </BorderBox>
      <BorderBox w={"30%"} p={1}>
        {props.reference}
      </BorderBox>
      <BorderBox w={"10%"} p={1 / 2}>
        <FontAwesome name="file" size="2x" style={{ padding: 5 }} />
        <FontAwesome name="file" size="2x" style={{ padding: 5 }} />
      </BorderBox>
    </Flex>
  )
}

export default PhenotypeRow
