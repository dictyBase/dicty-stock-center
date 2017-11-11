import React, { Component, PropTypes } from 'react'
import Cart from './Cart'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router-dom'
import 'styles/core.scss'

export default class ShoppingCart extends Component {
    displayName = 'Shopping cart'
    static propTypes = {
        cart: PropTypes.object,
        cartActions: PropTypes.object
    }
    renderAlert = () => {
        return (
            <Grid>
                <Cell width="1">
                    <div className="container">
                        <div className="alert alert-danger">
                          <strong>
                                <i className="fa fa-exclamation-circle"></i>
                          </strong> There are no items in your cart.
                        </div>
                    </div>
                </Cell>
            </Grid>
        )
    }
    render() {
        const { cart, cartActions } = this.props
        return (
            <div className="container">
                <Grid>
                    <Cell align="center" width="1">
                          <h1 className="dicty-header">Shopping Cart</h1>
                    </Cell>
                </Grid>
                { cart.addedItems.length > 0 ? (
                <Grid>
                    <Cell width="1">
                        <Grid>
                            <Cart cart={ cart } cartActions={ cartActions }/>
                        </Grid>
                    </Cell>
                    <Cell width="1">
                        <Grid style={ {marginTop: '50px'} }>
                            <Cell width="1/2" smallWidth="1">
                                <Link to="/strains"
                                  className="btn btn-primary btn-lg btn-block">
                                    <i className="fa fa-share"></i> Continue Shopping
                                </Link>
                            </Cell>
                            <Cell width="1/2" smallWidth="1">
                                <Link to="/order/shipping"
                                  className="btn btn-success btn-lg btn-block">
                                    <i className="fa fa-shopping-cart"></i> Checkout
                                </Link>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>) : this.renderAlert() }
            </div>
        )
    }
}
