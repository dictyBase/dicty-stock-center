import types from '../constants'

const { ADD_SHIPPING } = types

const initialState = {
    initialized: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_SHIPPING:
        return {
            ...state,
            initialized: true,
            consumer: action.consumer,
            shipping: {
                account: action.details.shipAccount,
                accountNum: action.details.shipAccountNum,
                comments: action.details.comments
            }
        }
    default:
        return state
    }
}
export default orderReducer
