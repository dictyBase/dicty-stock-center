// @flow
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        <FontAwesomeIcon icon="spinner" pulse fixedWidth />
      ) : (
        <FontAwesomeIcon icon={icon && icon} aria-hidden="true" />
      )}
    </PrimaryLargeButton>
  )
}

export default SubmitButton
