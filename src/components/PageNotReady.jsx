import React, { Component } from "react"
import { Link } from "react-router-dom"
import FontAwesome from "react-fontawesome"
import { Container, Jumbotron, PrimaryButton } from "styles"

export default class PageNotReady extends Component {
  render() {
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
}
