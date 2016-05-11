import { routeActions } from 'react-router-redux'
import { createUser, getUser, updateUser } from 'utils/api'
import { status, json } from 'utils/fetch'
import types from 'constants'

const { ADD_SHIPPING } = types

const addShipping = (user, details) => {
    return {
        type: ADD_SHIPPING,
        initialized: true,
        user,
        details
    }
}

let server = SERVER
if (process.env.SERVER) {
    server = process.env.SERVER
}

export const submitForm = (values, dispatch) => {
    let details = {
        shipAccount: values.shipAccount,
        shipAccountNum: values.shipAccountNum,
        comments: values.comments
    }
    return new Promise((resolve, reject) => {
        getUser(server, values.email)
        .then(response => {
            if (response.status === 200) {
                return Promise.resolve(true)
            } else if (response.status === 404) {
                return Promise.resolve(false)
            }
            return Promise.reject(new Error('Error'))
        })
        .then(userExists => {
            if (userExists) {
                updateUser(server, values)
                .then(status)
                .then(json)
                .then(user => {
                    resolve()
                    dispatch(addShipping(user, details))
                    dispatch(routeActions.push('/order/payment'))
                })
                .catch(error => {
                    reject({_error: 'User cannot be updated', error})
                })
            } else {
                createUser(server, values)
                .then(status)
                .then(json)
                .then(user => {
                    resolve()
                    dispatch(addShipping(user, details))
                    dispatch(routeActions.push('/order/payment'))
                })
                .catch(error => {
                    reject({_error: 'User cannot be created', error})
                })
            }
        })
        .catch(error => {
            reject({_error: 'Fetching user error!', error})
        })
    })
}

