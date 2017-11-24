import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import 'styles/core.scss'

// tweak mobile responsiveness

export default class ShoppingCart extends Component {
    displayName = 'Shopping cart'
    static propTypes = {
        cart: PropTypes.object,
        cartActions: PropTypes.object
    }
    renderAlert = () => {
        return (
            <Flex>
                <Box width={ 1 }>
                    <div className="container">
                        <div className="alert alert-danger">
                            <strong>
                                <i className="fa fa-exclamation-circle" />
                            </strong>{ ' ' }
                            There are no items in your cart.
                        </div>
                    </div>
                </Box>
            </Flex>
        )
    }
    render() {
        const { cart, cartActions } = this.props
        return (
            <div className="container">
                <Flex justify="center">
                    <Box>
                        <h1 className="dicty-header">Shopping Cart</h1>
                    </Box>
                </Flex>
                { cart.addedItems.length > 0 ? (
                    <div>
                        <Flex>
                            <Box width={ [1, 1 / 2] } >
                                <Cart cart={ cart } cartActions={ cartActions } />
                            </Box>
                        </Flex>
                        <Flex justify="left">
                            <Box width={ [1, 1 / 2] } mt={ 50 } mr={ 1 }>
                                <Link
                                    to="/strains"
                                    className="btn btn-primary btn-lg btn-block">
                                    <i className="fa fa-share" /> Continue
                                    Shopping
                                </Link>
                            </Box>
                            <Box width={ [1, 1 / 2] } mt={ 50 }>
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
            </div>
        )
    }
}
