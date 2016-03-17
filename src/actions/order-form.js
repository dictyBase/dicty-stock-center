import types from '../constants'
import simpleStorage from 'simplestorage.js'
import { routeActions } from 'react-router-redux'

const { FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAILURE } = types

const submitRequest = () => {
    return {
        type: FORM_SUBMIT_REQUEST
    }
}

const submitSuccess = data => {
    return {
        type: FORM_SUBMIT_SUCCESS,
        data
    }
}

const submitFailure = error => {
    return {
        type: FORM_SUBMIT_FAILURE,
        error
    }
}

const submitForm = (data, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(submitRequest())
        dispatch(routeActions.push('/order/form/submitting'))
        setTimeout(() => {
            simpleStorage.set('formdata', data)
            resolve()
            dispatch(submitSuccess(data))
            dispatch(routeActions.push('/home'))
        }, 2000)
    })
}

export default submitForm
