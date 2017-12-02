import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container } from 'styles'
import FontAwesome from 'react-fontawesome'

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
                            <FontAwesome name="shopping-cart" size="3x" />
                            ({ addedItems.length })
                        </Link>
                    </Box>
                </Flex>
            </Container>
        )
    }
}
