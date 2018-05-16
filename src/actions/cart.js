// @flow
import { dsctypes } from "constants/dsctypes"
import { fees } from "constants/fees"

const { ADD_TO_CART, REMOVE_FROM_CART } = dsctypes
const { STRAIN_FEE, PLASMID_FEE, OTHER_FEE } = fees

export const addItem = item => {
  let fee
  if (item.type === "strain") {
    fee = STRAIN_FEE
  } else if (item.type === "plasmid") {
    fee = PLASMID_FEE
  } else {
    fee = OTHER_FEE
  }
  return {
    type: ADD_TO_CART,
    payload: {
      fee: fee,
      item
    }
  }
}

export const addToCart = (item: string) => {
  return (dispatch: Function) => {
    dispatch(addItem(item))
  }
}

export const removeItem = (id: string) => {
  return (dispatch: Function, getState: Function) => {
    const { addedItems } = getState().cart
    const removeIndex = addedItems
      .map(itm => {
        return itm.id
      })
      .indexOf(id)
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        removeIndex
      }
    })
  }
}
