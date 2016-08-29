import types from '../constants'
// import simpleStorage from 'simplestorage.js'

const { ADD_TO_CART } = types

const initialState = {
    addedItems: []
}

const addedItems = (state = initialState.addedItems, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        if (state.map(item => { return item.id }).indexOf(action.item.id) !== -1) {
            // item is already added to the cart
            return state
        }
        return [
            ...state,
            {id: action.item.id, name: action.item.systematicName}
        ]
    default:
        return state
    }
}

const cartReducer = (state = initialState, action) => {
    return {
        addedItems: addedItems(state.addedItems, action)
    }
}


export default cartReducer
