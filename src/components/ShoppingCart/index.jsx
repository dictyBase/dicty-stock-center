import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class ShoppingCart extends Component {
    displayName = 'Shopping cart';

    render() {
        return (
            <div className="container">
                <Grid cellWidth="1">
                    <Cell align="center">
                          <h1 className="dicty-header">Shopping Cart</h1>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
