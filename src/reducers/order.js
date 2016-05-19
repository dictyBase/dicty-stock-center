import types from '../constants'

const { ADD_SHIPPING, ADD_PAYMENT, SAME_AS_SHIPPING,
        SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE
} = types

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
    case SUBMIT_REQUEST:
        return {
            ...state,
            submitting: true
        }
    case SUBMIT_SUCCESS:
        return {
            ...state,
            submitting: false,
            id: action.order.id
        }
    case SUBMIT_FAILURE:
        return {
            ...state,
            submitting: false,
            error: action.error
        }
    default:
        return state
    }
}
export default orderReducer
