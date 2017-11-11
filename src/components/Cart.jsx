import React, { Component, PropTypes } from 'react'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router-dom'
import 'styles/core.scss'

export default class Cart extends Component {
    displayName = 'Shopping cart icon'
    static propTypes = {
        cart: PropTypes.object.isRequired
    }
    render() {
        const { addedItems } = this.props.cart
        return (
            <div className="container">
                <Grid cellWidth="1/3" style={ { justifyContent: 'flex-end' } }>
                    <Cell align="right">
                        <Link to="/cart">
                          <i className="fa fa-shopping-cart fa-3x"></i>
                              ({ addedItems.length })
                        </Link>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
