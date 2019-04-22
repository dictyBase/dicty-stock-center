// @flow
import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { Flex, Box } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "styles"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** Array for currently added items in the cart */
  addedItems: Array<Object>,
}

/**
 * This is the cart component that displays between the Navbar and body content on every page.
 * It has a cart icon with the current number of added items next to it.
 */

export const Cart = (props: Props) => {
  const addedItems = props.addedItems
  return (
    <Container>
      <Flex justify="flex-end">
        <Box>
          <Link to="/cart">
            <FontAwesomeIcon icon="shopping-cart" size="2x" /> (
            {addedItems.length})
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  addedItems: state.cart.addedItems,
})

export default connect(mapStateToProps)(Cart)
