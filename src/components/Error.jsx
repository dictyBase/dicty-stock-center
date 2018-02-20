// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, AlertBox } from 'styles'
import FontAwesome from 'react-fontawesome'
import type { MapStateToProps } from 'react-redux'

type Props = {
  authError: string,
  orderError: string,
  fetchError: string
}

export class Error extends Component<Props> {
  displayName = 'homepage component'
  render() {
    const { authError, orderError, fetchError } = this.props
    return (
      <Container>
        <AlertBox>
          <h1>
            <FontAwesome name="exclamation-triangle" /> Error
          </h1>
          <h2>{authError && authError}</h2>
          <h2>{orderError && orderError}</h2>
          <h2>{fetchError && fetchError}</h2>
        </AlertBox>
      </Container>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    authError: state.auth.error,
    orderError: state.order.error,
    fetchError: state.page.error
  }
}

export default connect(mapStateToProps)(Error)
