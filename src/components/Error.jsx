import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, AlertBox } from 'styles'
import FontAwesome from 'react-fontawesome'

export class Error extends Component {
  displayName = 'homepage component'
  render() {
    const { authError, orderError } = this.props
    return (
      <Container>
        <AlertBox>
          <h1>
            <FontAwesome name="exclamation-triangle" /> Error
          </h1>
          <h2>{authError && authError}</h2>
          <h2>{orderError && orderError}</h2>
        </AlertBox>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.error,
    orderError: state.order.error
  }
}

export default connect(mapStateToProps)(Error)
