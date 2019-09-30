// @flow
import { dsctypes } from "constants/dsctypes"

const { ADD_TO_CART, REMOVE_FROM_CART } = dsctypes

const initialState = {
  addedItems: [],
}

const addedItems = (state = initialState.addedItems, action: Object) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          id: action.payload.item.id,
          name: action.payload.item.name,
          summary: action.payload.item.summary,
          fee: action.payload.fee,
        },
      ]
    case REMOVE_FROM_CART:
      return [
        ...state.slice(0, action.payload.removeIndex),
        ...state.slice(action.payload.removeIndex + 1),
      ]
    default:
      return state
  }
}

const cartReducer = (state: Object = initialState, action: Object) => ({
  addedItems: addedItems(state.addedItems, action),
})

export default cartReducer
