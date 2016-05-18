import { createOrder } from 'utils/api'
import { status, json } from 'utils/fetch'
import { routeActions } from 'react-router-redux'
import types from 'constants'

const { SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE } = types

const submitRequest = () => {
    return {
        type: SUBMIT_REQUEST,
        submitting: true
    }
}

const submitSuccess = () => {
    return {
        type: SUBMIT_SUCCESS,
        submitting: false
    }
}

const submitFailure = error => {
    return {
        type: SUBMIT_FAILURE,
        submitting: false,
        error
    }
}

let server = SERVER
if (process.env.SERVER) {
    server = process.env.SERVER
}

// submit dsc order and redirect user to a confirmation page
export const submitOrder = () => {
    return (dispatch, getState) => {
        const state = getState()
        dispatch(submitRequest())
        createOrder(server, state.order)
        .then(status)
        .then(json)
        .then(order => {
            dispatch(submitSuccess())
            // dispatch(routeActions.push('/order/submitted'))
            console.log('submitted successfully', order)
        })
        .catch(error => {
            dispatch(submitFailure(error))
            console.log('errorrr')
        })
    }
}
