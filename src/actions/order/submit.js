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

const submitSuccess = order => {
    return {
        type: SUBMIT_SUCCESS,
        submitting: false,
        order
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
        const { order } = getState()
        dispatch(submitRequest())
        createOrder(server, order)
        .then(status)
        .then(json)
        .then(response => {
            dispatch(submitSuccess(response.data))
            dispatch(routeActions.push('/order/submitted'))
        })
        .catch(error => {
            dispatch(submitFailure(error))
        })
    }
}
