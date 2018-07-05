// @flow
import React from "react"
import FontAwesome from "react-fontawesome"
import { PrimaryLargeButton } from "styles"

type Props = {
  submitting: boolean,
  name: string,
  icon: string,
}

const SubmitButton = (props: Props) => {
  const { submitting, name, icon } = props
  return (
    <PrimaryLargeButton type="submit" disabled={submitting}>
      {" "}
      {name}
      {submitting ? (
        <FontAwesome name="spinner" pulse fixedWidth />
      ) : (
        <FontAwesome name={icon && icon} aria-hidden="true" />
      )}
    </PrimaryLargeButton>
  )
}

export default SubmitButton
