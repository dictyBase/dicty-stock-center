import types from '../constants'
// import simpleStorage from 'simplestorage.js'

const { ADD_TO_CART } = types

const initialState = {
    addedIds: [],
    quantityById: {}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        return {
            ...state
            // return state
        }
    default:
        return state
    }
}
export default cartReducer
