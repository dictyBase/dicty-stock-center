// @flow
import React from "react"
import { connect } from "react-redux"
import ShoppingCartItemsTable from "./ShoppingCartItemsTable"
import { removeItem } from "actions/cart"

type Props = {
  /** List of items in the cart */
  items: Array<{
    id: string,
    name: string,
    fee: string,
  }>,
  /** Action to remove item from cart */
  removeItem: Function,
  /** Material-UI styling */
  classes: Object,
}

/**
 * ShoppingCartItems displays the list of items currently in the shopping cart.
 */

export const ShoppingCartItems = (props: Props) => {
  const { items, removeItem } = props

  const plasmids = items.filter(item => item.id.substring(0, 3) === "DBP")
  const strains = items.filter(item => item.id.substring(0, 3) === "DBS")

  return (
    <>
      {strains.length > 0 && (
        <ShoppingCartItemsTable
          stock="Strains"
          items={strains}
          removeItem={removeItem}
        />
      )}
      <br />
      {plasmids.length > 0 && (
        <ShoppingCartItemsTable
          stock="Plasmids"
          items={plasmids}
          removeItem={removeItem}
        />
      )}
    </>
  )
}

const mapStateToProps = state => ({
  items: state.cart.addedItems,
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItem(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartItems)
