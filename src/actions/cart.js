import types from '../constants'

const { ADD_TO_CART } = types

export const addToCart = (item) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            item
        })
    }
}
