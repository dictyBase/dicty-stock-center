// @flow
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Flex, Box } from "rebass"
import { Container, AlertBox } from "styles"
import FontAwesome from "react-fontawesome"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** the object that contains auth data from current state */
  auth: Object,
  /** the object that contains order data from current state */
  order: Object,
  /** the object that contains page data from current state */
  page: Object
}

/**
 * General error page component. Can accept error messages from multiple pieces of the state.
 */

export const Error = (props: Props) => {
  const { auth, order, page } = props
  return (
    <Container>
      <Flex justify="center">
        <Box w={3 / 4}>
          <AlertBox>
            <h1>
              <FontAwesome name="exclamation-triangle" /> Error{" "}
              <FontAwesome name="exclamation-triangle" />
            </h1>
            <h3>{auth.error ? auth.error : ""}</h3>
            <h3>{order.error ? order.error : ""}</h3>
            <h3>{page.error ? page.error : ""}</h3>
            <p>
              Please <Link to="/contact">contact us</Link> if this problem
              persists.
            </p>
            <p>
              <Link to="/">Return Home</Link>
            </p>
          </AlertBox>
        </Box>
      </Flex>
    </Container>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    auth: state.auth,
    order: state.order,
    page: state.page
  }
}

export default connect(mapStateToProps)(Error)
