import { routeActions } from 'react-router-redux'
import { createUser, getUser, updateUser } from 'utils/api'
import types from '../constants'

const { ADD_SHIPPING_INFO } = types

const addShippingInfo = (consumer, details) => {
    return {
        type: ADD_SHIPPING_INFO,
        initialized: true,
        consumer,
        details
    }
}

// const addPaymentInfo = paymentInfo => {
//     return {
//         type: ADD_PAYMENT_INFO,
//         paymentInfo
//     }
// }

const status = response => {
  // HTTP response codes 2xx indicate that the request was processed successfully
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => {
    return response.json()
}


let server = SERVER
if (process.env.SERVER) {
    server = process.env.SERVER
}

export const submitShippingInfo = (values, dispatch) => {
    let shippingDetails = {
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
                .then(consumer => {
                    resolve()
                    dispatch(addShippingInfo(consumer, shippingDetails))
                    dispatch(routeActions.push('/order/payment'))
                })
                .catch(error => {
                    console.log(error)
                    reject({_error: 'User cannot be updated'})
                })
            } else {
                createUser(server, values)
                .then(status)
                .then(json)
                .then(consumer => {
                    resolve()
                    dispatch(addShippingInfo(consumer, shippingDetails))
                    dispatch(routeActions.push('/order/billing'))
                })
                .catch(error => {
                    console.log(error)
                    reject({_error: 'User cannot be created'})
                })
            }
        })
        .catch(error => {
            console.log(error)
            reject({_error: 'Fetching user error!'})
        })
    })
}

