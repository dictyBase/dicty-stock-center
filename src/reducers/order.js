import types from '../constants'

const { ADD_SHIPPING_INFO } = types

const initialState = {
    initialized: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_SHIPPING_INFO:
        return {
            ...state,
            initialized: true,
            shippingInfo: {
                consumer: action.consumer,
                shipAccount: action.details.shipAccount,
                shipAccountNum: action.details.shipAccountNum,
                comments: action.details.comments
            }
        }
    default:
        return state
    }
}
export default orderReducer
