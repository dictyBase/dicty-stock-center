import * as actions from "actions/cart"
import { dsctypes } from "constants/dsctypes"
import { fees } from "constants/fees"

const { ADD_TO_CART } = dsctypes
const { STRAIN_FEE } = fees

describe("cart actions", () => {
  describe("add item to cart", () => {
    it("should create an action to add an item to the cart", () => {
      const item = {
        type: "strain"
      }
      const fee = STRAIN_FEE
      const expectedAction = {
        type: ADD_TO_CART,
        payload: {
          fee: fee,
          item
        }
      }
      expect(actions.addItem(item)).toEqual(expectedAction)
    })
  })
})
