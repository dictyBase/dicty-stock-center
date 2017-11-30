import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container } from 'styles'

export default class Cart extends Component {
    displayName = 'Shopping cart icon'
    static propTypes = {
        cart: PropTypes.object.isRequired
    }
    render() {
        const { addedItems } = this.props.cart
        return (
            <Container>
                <Flex justify="flex-end">
                    <Box>
                        <Link to="/cart">
                          <i className="fa fa-shopping-cart fa-3x"></i>
                              ({ addedItems.length })
                        </Link>
                    </Box>
                </Flex>
            </Container>
        )
    }
}
