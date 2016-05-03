// import types from '../constants'
// import { routeActions } from 'react-router-redux'
// import simpleStorage from 'simplestorage.js'

// const { FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS } = types

// const submitRequest = () => {
//     return {
//         type: FORM_SUBMIT_REQUEST,
//         submitted: false
//     }
// }

// const submitSuccess = data => {
//     return {
//         type: FORM_SUBMIT_SUCCESS,
//         submitted: true,
//         data
//     }
// }

// const submitFailure = error => {
//     return {
//         type: FORM_SUBMIT_FAILURE,
//         submitted: false,
//         error: error
//     }
// }

// const submitOrder = (data) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(submitRequest())
//             simpleStorage.set('formdata', data)
//             dispatch(submitSuccess(data))
//             dispatch(routeActions.push('/home'))
//         }, 2000)
//     }
// }

// const status = response => {
//   // HTTP response codes 2xx indicate that the request was processed successfully
//     if (response.status >= 200 && response.status < 300) {
//         console.log('response with 200')
//         return Promise.resolve(response)
//     }
//     console.log('bad response')
//     return Promise.reject(new Error(response.statusText))
// }

// const json = response => {
//     console.log('response function')
//     return response.json()
// }

// const submitShippingaddr = values => {
//     return dispatch => {
//         let config = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 content: values
//             })
//         }
//         fetch('http://localhost:3001/users', config)
//         .then(status)
//         .then(json)
//         .then(data => {
//             console.log('success with json')
//         })
//         .catch(error => {
//             console.log('catch error', error)
//         })
//     }
// }

// export const submitShippingAddress = (values, dispatch) => {
//     return new Promise((resolve, reject) => {
//         let config = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 content: values
//             })
//         }
//         fetch('http://localhost:3001/users', config)
//             .then(response => {
//                 console.log('gets response')
//                 if (response.status >= 200 && response.status < 300) {
//                     console.log(response.status)
//                     resolve()
//                 } else {
//                     console.log('reject promise')
//                     reject({_error: response.status + ' ' + response.statusText})
//                 }
//             })
//             .catch(error => {
//                 console.log('catch error', error)
//                 reject({_error: error})
//             })
//     })
// }

export const submitShippingAddress = (values, dispatch) => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('http://localhost:3001/users?id=72', config)
            .then(response => {
                console.log('gets response')
                if (response.status >= 200 && response.status < 300) {
                    console.log(response.status)
                    console.log(typeof response)
                    resolve()
                } else {
                    console.log('reject promise')
                    reject({_error: response.status + ' ' + response.statusText})
                }
            })
            .catch(error => {
                console.log('catch error', error)
                reject({_error: error})
            })
    })
}

// // Test
// export const submitShippingAddress = (values, dispatch) => {
//     return new Promise((resolve, reject) => {
//         if (values.phone === '75') {
//             reject({_error: '75 is error'})
//         }
//         resolve()
//     })
// }

// let server = SERVER
// if (process.env.SERVER) {
//     server = process.env.SERVER
// }

// const submitShippingAddr = (data) => {
//     return dispatch => {
//         let config = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 content: data
//             })
//         }
//         dispatch(submitRequest())
//         dispatch(routeActions.push('/order/form/submitting'))
//         fetch(`${server}/orders`, config)
//         .then(response => {
//             if (!(response.status >= 200 && response.status < 300)) {
//                 dispatch(submitFailure(response))
//                 return
//             }
//             dispatch(submitSuccess(response))
//             dispatch(routeActions.push('/home'))
//         })
//         .catch(err => {
//             dispatch(submitFailure(err))
//         })
//     }
// }

// export const submitShippingAddress = (data, dispatch) => {
//     dispatch(submitShippingaddr(data))
// }
