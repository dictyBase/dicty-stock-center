// @flow
import React from "react"
import { Link } from "react-router-dom"
import FontAwesome from "react-fontawesome"
import { Container, Jumbotron, PrimaryButton } from "styles"

/**
 * General 404 error page, currently designated as "Page Not Ready"/"Under Construction"
 */

const PageNotReady = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>
          <FontAwesome name="wrench" /> Under Construction
        </h1>
        <p>This page is not ready yet.</p>
        <PrimaryButton>
          <Link to="/">Stock Center Home</Link>
        </PrimaryButton>
      </Jumbotron>
    </Container>
  )
}

export default PageNotReady
