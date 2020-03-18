type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
}

/**
 * Helper function to determine if an item is already in the cart.
 */

const itemIsInCart = (addedItems: Array<CartItem>, id: string) =>
  addedItems.some((stock: CartItem) => stock.id === id)

export default itemIsInCart
