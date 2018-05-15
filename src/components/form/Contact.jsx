// @flow
import React from "react"
import FormGroupInput from "./FormGroupInput"
import { RequiredText } from "styles"

type Props = {
  phone: Object
}

const Contact = (props: Props) => {
  const { phone } = props
  return (
    <div>
      <FormGroupInput field={phone}>
        <RequiredText title="required field">* </RequiredText>
        Phone:
      </FormGroupInput>
    </div>
  )
}

export default Contact
