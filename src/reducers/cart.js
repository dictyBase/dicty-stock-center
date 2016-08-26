import types from '../constants'
// import simpleStorage from 'simplestorage.js'

const { ADD_TO_CART } = types

const initialState = {
    addedIds: [],
    nameById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        if (state.indexOf(action.item.id) !== -1) {
            return state
        }
        return [ ...state, action.item.id ]
    default:
        return state
    }
}

const nameById = (state = initialState.nameById, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        return {
            ...state,
            [action.item.id]: action.item.systematicName
        }
    default:
        return state
    }
}

const cartReducer = (state = initialState, action) => {
    return {
        addedIds: addedIds(state.addedIds, action),
        nameById: nameById(state.nameById, action)
    }
}


export default cartReducer
