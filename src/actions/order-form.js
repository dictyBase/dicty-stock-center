import types from '../constants'
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

// const submitOrder = (data) => {
//     return dispatch => {
//         dispatch(submitRequest())
//         dispatch(routeActions.push('/order/form/submitting'))
//         setTimeout(() => {
//             simpleStorage.set('formdata', data)
//             dispatch(submitSuccess(data))
//             dispatch(routeActions.push('/home'))
//         }, 2000)
//     }
// }

let server = SERVER
if (process.env.SERVER) {
    server = process.env.SERVER
}

const submitOrder = (data) => {
    return dispatch => {
        let config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: data
            })
        }
        dispatch(submitRequest())
        dispatch(routeActions.push('/order/form/submitting'))
        fetch(`${server}/orders`, config)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                dispatch(submitSuccess())
                dispatch(routeActions.push('/home'))
                return Promise.resolve(response)
            }
            return Promise.reject(new Error(response.statusText))
        }).catch(error => {
            dispatch(submitFailure(error))
            dispatch(routeActions.push('/error'))
        })
    }
}

export const submitForm = (data, dispatch) => {
    dispatch(submitOrder(data))
}
