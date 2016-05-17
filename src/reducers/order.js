import types from '../constants'

const { ADD_SHIPPING, ADD_PAYMENT, SAME_AS_SHIPPING } = types

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
    case ADD_PAYMENT:
        return {
            ...state,
            initialized: true,
            payer: action.payer,
            payment: {
                method: action.payment.method,
                poNum: action.payment.poNum
            }
        }
    case SAME_AS_SHIPPING:
        return {
            ...state,
            initialized: true,
            payer: {
                ...state.consumer,
                sameAsShipping: true
            },
            payment: {
                method: action.payment.method,
                poNum: action.payment.poNum
            }
        }
    default:
        return state
    }
}
export default orderReducer
