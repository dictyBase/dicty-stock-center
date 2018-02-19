import { dsctypes } from "constants/index"

const {
  ADD_SHIPPING,
  ADD_PAYMENT,
  SAME_AS_SHIPPING,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
} = dsctypes

// Reducer for payment and editPayment forms
const paymentFormReducer = (state, action) => {
  switch (action.type) {
    case SAME_AS_SHIPPING:
      const { consumer } = action
      return {
        ...state,
        firstName: { value: consumer.firstName, visited: true, touched: true },
        lastName: { value: consumer.lastName, visited: true, touched: true },
        email: { value: consumer.email, visited: true, touched: true },
        org: { value: consumer.org, visited: true, touched: true },
        group: { value: consumer.group, visited: true, touched: true },
        address: { value: consumer.address, visited: true, touched: true },
        address2: { value: consumer.address2, visited: true, touched: true },
        city: { value: consumer.city, visited: true, touched: true },
        state: { value: consumer.state, visited: true, touched: true },
        zip: { value: consumer.zip, visited: true, touched: true },
        country: { value: consumer.country, visited: true, touched: true },
        phone: { value: consumer.phone, visited: true, touched: true },
      }
    default:
      return state
  }
}

// redux-form reducer plugin
export const formReducerPlugin = {
  payment: paymentFormReducer,
  editPayment: paymentFormReducer,
}

const initialState = {
  initialized: false,
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
          comments: action.details.comments,
        },
      }
    case ADD_PAYMENT:
      return {
        ...state,
        initialized: true,
        payer: action.payer,
        payment: {
          method: action.payment.method,
          poNum: action.payment.poNum,
        },
      }
    case SUBMIT_REQUEST:
      return {
        ...state,
        submitting: true,
      }
    case SUBMIT_SUCCESS:
      return {
        ...state,
        submitting: false,
        id: action.order.id,
      }
    case SUBMIT_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.error.message,
      }
    default:
      return state
  }
}
export default orderReducer
