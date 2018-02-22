// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container, AlertBox } from 'styles'
import FontAwesome from 'react-fontawesome'
import type { MapStateToProps } from 'react-redux'

type Props = {
  auth: Object,
  order: Object,
  page: Object
}

export class Error extends Component<Props> {
  displayName = 'error component'
  render() {
    const { auth, order, page } = this.props
    return (
      <Container>
        <Flex justify="center">
          <Box w={3 / 4}>
            <AlertBox>
              <h1>
                <FontAwesome name="exclamation-triangle" /> Error{' '}
                <FontAwesome name="exclamation-triangle" />
              </h1>
              <h3>{auth.error ? auth.error.message : ''}</h3>
              <h3>{order.error ? order.error.message : ''}</h3>
              <h3>{page.error ? page.error.message : ''}</h3>
              <p>
                Please <Link to="/contact">contact us</Link> if this problem
                persists.
              </p>
              <p><Link to="/">Return Home</Link></p>
            </AlertBox>
          </Box>
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    auth: state.auth,
    order: state.order,
    page: state.page
  }
}

export default connect(mapStateToProps)(Error)
