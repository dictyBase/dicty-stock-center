// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import Cart from './Cart'
import {
  DictyHeader,
  Container,
  AlertBox,
  PrimaryButton,
  SuccessButton
} from 'styles'

type Props = {
  addedItems: Array<Object>
}

class ShoppingCart extends Component<Props> {
  displayName = 'Shopping cart'

  renderAlert = () => {
    return (
      <Flex wrap justify="center">
        <Box w={['85%', 2 / 3]}>
          <AlertBox>
            <strong>
              <FontAwesome name="exclamation-circle" />
            </strong>{' '}
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
              <Box w={[1, '40%']} mt={10} mr={1}>
                <PrimaryButton className={`large block`}>
                  <Link to="/strains">
                    <FontAwesome name="share" /> Continue Shopping
                  </Link>
                </PrimaryButton>
              </Box>
              <Box w={[1, '40%']} mt={10} mr={1}>
                <SuccessButton className={`large block`}>
                  <Link to="/order/shipping">
                    <FontAwesome name="shopping-cart" /> Checkout
                  </Link>
                </SuccessButton>
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

const mapStateToProps = state => {
  return {
    addedItems: state.cart.addedItems
  }
}

export default connect(mapStateToProps)(ShoppingCart)
