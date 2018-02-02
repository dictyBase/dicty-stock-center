// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import { Container } from 'styles'
import type { MapStateToProps } from 'react-redux'

type Props = {
    addedItems: Array<Object>
}

export class Cart extends Component<Props> {
    displayName = 'Shopping cart icon'

    render() {
        const addedItems = this.props.addedItems
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

const mapStateToProps: MapStateToProps<*, *, *> = state => {
    return {
        addedItems: state.cart.addedItems
    }
}

export default connect(mapStateToProps)(Cart)
