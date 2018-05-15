// @flow
import React from "react"
import FormGroupInput from "./FormGroupInput"
import { RequiredText } from "styles"

type Props = {
  firstName: Object,
  lastName: Object,
  email: Object
}

const Personal = (props: Props) => {
  const { firstName, lastName, email } = props
  return (
    <div>
      <FormGroupInput field={firstName}>
        <RequiredText>* </RequiredText>
        First Name:
      </FormGroupInput>
      <FormGroupInput field={lastName}>
        <RequiredText>* </RequiredText>
        Last Name:
      </FormGroupInput>
      <FormGroupInput field={email}>
        <RequiredText>* </RequiredText>
        Email:
      </FormGroupInput>
    </div>
  )
}

export default Personal
