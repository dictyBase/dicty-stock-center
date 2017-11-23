import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid } from 'styles'
import 'styles/core.scss'

const Cell = styled.div`
    float: right
`

// remove Bootstrap?

export default class Cart extends Component {
    displayName = 'Shopping cart icon'
    static propTypes = {
        cart: PropTypes.object.isRequired
    }
    render() {
        const { addedItems } = this.props.cart
        return (
            <div className="container">
                <Grid>
                    <Cell>
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
