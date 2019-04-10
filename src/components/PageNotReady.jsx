// @flow
import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Jumbotron, PrimaryButton } from "styles"

/**
 * General 404 error page, currently designated as "Page Not Ready"/"Under Construction"
 */

const PageNotReady = () => (
  <Container>
    <Jumbotron>
      <h1>
        <FontAwesomeIcon icon="wrench" /> Under Construction
      </h1>
      <br />
      <p>This page is not ready yet.</p>
      <br />
      <br />
      <Link to="/">
        <PrimaryButton>Stock Center Home</PrimaryButton>
      </Link>
    </Jumbotron>
  </Container>
)

export default PageNotReady
