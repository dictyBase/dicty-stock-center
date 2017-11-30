import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { DictyHeader, Container } from 'styles'

export default class ShoppingCart extends Component {
    displayName = 'Shopping cart'
    static propTypes = {
        cart: PropTypes.object,
        cartActions: PropTypes.object
    }
    renderAlert = () => {
        return (
            <Flex>
                <Box>
                    <Container>
                        <div className="alert alert-danger">
                            <strong>
                                <i className="fa fa-exclamation-circle" />
                            </strong>{ ' ' }
                            There are no items in your cart.
                        </div>
                    </Container>
                </Box>
            </Flex>
        )
    }
    render() {
        const { cart, cartActions } = this.props
        return (
            <Container>
                <Flex justify="center">
                    <Box>
                        <DictyHeader>
                            <h1>Shopping Cart</h1>
                        </DictyHeader>
                    </Box>
                </Flex>
                { cart.addedItems.length > 0 ? (
                    <div>
                        <Flex justify="center" wrap>
                            <Box w={ 1 }>
                                <Cart cart={ cart } cartActions={ cartActions } />
                            </Box>
                        </Flex>
                        <Flex wrap justify="center">
                            <Box w={ [1, '40%'] } mt={ 10 } mr={ 1 }>
                                <Link
                                    to="/strains"
                                    className="btn btn-primary btn-lg btn-block">
                                    <i className="fa fa-share" /> Continue
                                    Shopping
                                </Link>
                            </Box>
                            <Box w={ [1, '40%'] } mt={ 10 } mr={ 1 }>
                                <Link
                                    to="/order/shipping"
                                    className="btn btn-success btn-lg btn-block">
                                    <i className="fa fa-shopping-cart" />{ ' ' }
                                    Checkout
                                </Link>
                            </Box>
                        </Flex>
                    </div>
                ) : (
                    this.renderAlert()
                ) }
            </Container>
        )
    }
}
