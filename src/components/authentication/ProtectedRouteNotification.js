// @flow
import React from "react"
import { SnackbarContent } from "material-ui/Snackbar"
import styled from "styled-components"

// change background color of snackbar
const SnackbarStyle = styled(SnackbarContent)`
  && {
    background: #a94442;
  }
`

type Props = {
  /** The error message to display */
  error: string
}

const ProtectedRouteNotification = (props: Props) => {
  return (
    <center>
      <SnackbarStyle message={props.error} />
      <br />
    </center>
  )
}

export default ProtectedRouteNotification
