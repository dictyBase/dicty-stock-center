import React, { Component, PropTypes } from 'react'
import Cart from './Cart'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class ShoppingCart extends Component {
    displayName = 'Shopping cart'
    static propTypes = {
        cart: PropTypes.object,
        cartActions: PropTypes.object
    }
    renderAlert = () => {
        return (
            <Cell width="1">
                <div className="container">
                    <div className="alert alert-danger">
                      <strong>
                            <i className="fa fa-exclamation-circle"></i>
                      </strong> There are no items in your cart.
                    </div>
                </div>
            </Cell>
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
                    <Cell width="1" >
                        <Grid>
                        { cart.addedItems.length > 0 ? (
                            cart.addedItems.map((item, index) => {
                                return (
                                    <Cell key={ index } width="1">
                                        <Cart
                                          item={ item }
                                          cartActions={ cartActions }
                                        />
                                    </Cell>
                                )
                            })
                            ) : this.renderAlert()
                        }
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
