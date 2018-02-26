// @flow
import React, { Component } from "react"
import FormGroupInput from "./FormGroupInput"
import { RequiredText } from "styles"

type Props = {
  firstName: Object,
  lastName: Object,
  email: Object
}

export default class Personal extends Component<Props> {
  render() {
    const { firstName, lastName, email } = this.props
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
}
