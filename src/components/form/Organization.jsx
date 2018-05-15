// @flow
import React from "react"
import FormGroupInput from "./FormGroupInput"
import { RequiredText } from "styles"

type Props = {
  org: Object,
  group: Object
}

const Organization = (props: Props) => {
  const { org, group } = props
  return (
    <div>
      <FormGroupInput field={org}>
        <RequiredText title="required field">* </RequiredText>
        Organization:
      </FormGroupInput>
      <FormGroupInput field={group}>
        <RequiredText title="required field">* </RequiredText>
        Lab/Group:
      </FormGroupInput>
    </div>
  )
}

export default Organization
