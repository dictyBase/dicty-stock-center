import { dsctypes } from "constants/dsctypes"
import { fees } from "constants/fees"

const { ADD_TO_CART, REMOVE_FROM_CART } = dsctypes
const { STRAIN_FEE, PLASMID_FEE, OTHER_FEE } = fees

const addItem = item => {
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
    fee: fee,
    item
  }
}

export const addToCart = item => {
  return dispatch => {
    dispatch(addItem(item))
  }
}

export const removeItem = id => {
  return (dispatch, getState) => {
    const { addedItems } = getState().cart
    const removeIndex = addedItems
      .map(itm => {
        return itm.id
      })
      .indexOf(id)
    dispatch({
      type: REMOVE_FROM_CART,
      removeIndex
    })
  }
}
