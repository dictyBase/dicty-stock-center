import types from '../constants'
import simpleStorage from 'simplestorage.js'
import { routeActions } from 'react-router-redux'

const { FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAILURE } = types

const submitRequest = () => {
    return {
        type: FORM_SUBMIT_REQUEST,
        submitted: false
    }
}

const submitSuccess = data => {
    return {
        type: FORM_SUBMIT_SUCCESS,
        submitted: true,
        data
    }
}

const submitFailure = error => {
    return {
        type: FORM_SUBMIT_FAILURE,
        submitted: false,
        error
    }
}

const submitOrder = (data) => {
    return dispatch => {
        dispatch(submitRequest())
        dispatch(routeActions.push('/order/form/submitting'))
        setTimeout(() => {
            simpleStorage.set('formdata', data)
            dispatch(submitSuccess(data))
            dispatch(routeActions.push('/home'))
        }, 2000)
    }
}

export const submitForm = (data, dispatch) => {
    dispatch(submitOrder(data))
}
