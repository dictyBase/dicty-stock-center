import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router'
import 'styles/core.scss'

export default class Cart extends Component {
    displayName = 'Shopping cart icon';

    render() {
        return (
            <div className="container">
                <Grid cellWidth="1/3" style={ { justifyContent: 'flex-end' } }>
                    <Cell align="right">
                        <Link to="/order/cart">
                          <i className="fa fa-shopping-cart fa-3x"></i>
                        </Link>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
