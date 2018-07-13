// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import Cart from "./Cart"
import {
  DictyHeader,
  Container,
  AlertBox,
  PrimaryLargeButton,
  SuccessLargeButton,
} from "styles"
import type { MapStateToProps } from "react-redux"

type Props = {
  addedItems: Array<Object>,
}

class ShoppingCart extends Component<Props> {
  renderAlert = () => {
    return (
      <Flex wrap justify="center">
        <Box w={["85%", 2 / 3]}>
          <AlertBox>
            <strong>
              <FontAwesome name="exclamation-circle" />
            </strong>{" "}
            There are no items in your cart.
          </AlertBox>
        </Box>
      </Flex>
    )
  }
  render() {
    return (
      <Container>
        <Flex justify="center">
          <Box>
            <DictyHeader>
              <h1>Shopping Cart</h1>
            </DictyHeader>
          </Box>
        </Flex>
        {this.props.addedItems.length > 0 ? (
          <div>
            <Flex justify="center" wrap>
              <Box w={1}>
                <Cart />
              </Box>
            </Flex>
            <Flex wrap justify="center">
              <Box w={[1, "40%"]} mt={10} mr={1}>
                <Link to="/strains">
                  <PrimaryLargeButton>
                    <FontAwesome name="share" /> Continue Shopping
                  </PrimaryLargeButton>
                </Link>
              </Box>
              <Box w={[1, "40%"]} mt={10} mr={1}>
                <Link to="/order/shipping">
                  <SuccessLargeButton>
                    <FontAwesome name="shopping-cart" /> Checkout
                  </SuccessLargeButton>
                </Link>
              </Box>
            </Flex>
          </div>
        ) : (
          this.renderAlert()
        )}
      </Container>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    addedItems: state.cart.addedItems,
  }
}

export default connect(mapStateToProps)(ShoppingCart)
