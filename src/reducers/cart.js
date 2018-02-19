import { dsctypes } from "constants/index"
// import simpleStorage from 'simplestorage.js'

const { ADD_TO_CART, REMOVE_FROM_CART } = dsctypes

const initialState = {
  addedItems: [],
}

const addedItems = (state = initialState.addedItems, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        state
          .map(item => {
            return item.id
          })
          .indexOf(action.item.id) !== -1
      ) {
        // item is already added to the cart
        return state
      }
      return [
        ...state,
        {
          id: action.item.id,
          name: action.item.systematicName,
          fee: action.fee,
        },
      ]
    case REMOVE_FROM_CART:
      return [
        ...state.slice(0, action.removeIndex),
        ...state.slice(action.removeIndex + 1),
      ]
    default:
      return state
  }
}

const cartReducer = (state = initialState, action) => {
  return {
    addedItems: addedItems(state.addedItems, action),
  }
}

export default cartReducer
