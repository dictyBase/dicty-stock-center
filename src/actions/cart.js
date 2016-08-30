import types from '../constants'

const { ADD_TO_CART, REMOVE_FROM_CART } = types

export const addToCart = (item) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            item
        })
    }
}

export const removeItem = (id) => {
    return (dispatch, getState) => {
        const { addedItems } = getState().cart
        const removeIndex = addedItems.map((itm) => { return itm.id }).indexOf(id)
        dispatch({
            type: REMOVE_FROM_CART,
            removeIndex
        })
    }
}
