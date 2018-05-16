// @flow
import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import { AlertSuccess, PrimaryLargeButton, CenteredBox } from "styles"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** the current order ID number */
  id: number
}

/**
 * Displays notification that the user's order was submitted successfully.
 */

export const OrderConfirmation = (props: Props) => {
  return (
    <Flex wrap justify="center">
      <Box w={"75%"}>
        <Flex wrap justify="center">
          <CenteredBox w={1}>
            <AlertSuccess>
              <FontAwesome name="check-circle-o" size="5x" />
              <h3>Thank you, your order has been submitted successfully!</h3>
              <p>
                Order Number: <strong>{props.id}</strong>
              </p>
              <p>We have sent you a confirmation email.</p>
              <p>
                The <strong>Payer</strong> will soon receive emails through the{" "}
                <strong>NU Core</strong> system to complete payment.
              </p>
            </AlertSuccess>
          </CenteredBox>
          <Box w={1}>
            <PrimaryLargeButton>
              <Link to="/">
                <FontAwesome name="home" /> Stock Center Home
              </Link>
            </PrimaryLargeButton>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    id: state.order.id
  }
}

export default connect(mapStateToProps)(OrderConfirmation)
