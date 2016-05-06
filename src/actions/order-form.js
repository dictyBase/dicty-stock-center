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

// const userExists = data => {
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

let server = SERVER
if (process.env.SERVER) {
    server = process.env.SERVER
}

const userExists = (email, reject) => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(`${server}/users/${email}`, config)
    .then(response => {
        if (response.status === 200) {
            console.log('user exist')
            return Promise.resolve(response, true)
        } else if (response.status === 404) {
            console.log('user does not exist')
            return Promise.resolve(response, false)
        }
        return Promise.reject(new Error('Error'))
    })
}

const createUser = values => {
    // todo: create api.js file in util folder
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                type: 'user',
                attributes: {
                    first_name: values.firstNae,
                    last_name: values.lastName,
                    email: values.email,
                    organization: values.org,
                    group: values.group,
                    address: {first: values.address, second: values.address2},
                    city: values.city,
                    state: values.state,
                    zip: values.zip,
                    country: values.country,
                    phone: values.phone
                }
            }
        })
    }
    fetch(`${server}/users`, config)
    .then(status)
    .then(json)
    .then(data => {
        return Promise.resolve(data)
    })
}

const updateUser = values => {
    // todo: create api.js file in util folder
    let config = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                type: 'user',
                id: values.email,
                attributes: {
                    first_name: values.firstNae,
                    last_name: values.lastName,
                    email: values.email,
                    organization: values.org,
                    group: values.group,
                    address: {first: values.address, second: values.address2},
                    city: values.city,
                    state: values.state,
                    zip: values.zip,
                    country: values.country,
                    phone: values.phone
                }
            }
        })
    }
    fetch(`${server}/users/${values.email}`, config)
    .then(status)
    .then(json)
    .then(data => {
        return Promise.resolve(data)
    })
}

export const submitShippingAddress = (values, dispatch) => {
    const email = values.email

    return new Promise((resolve, reject) => {
        userExists(email)
        .then((response, isThere) => {
            if (isThere) {
                updateUser(values)
                .then(updateResponse => {
                    console.log('user updated successfully')
                    // update reducer with state
                    // go to next view
                    resolve()
                })
                .catch(error => {
                    console.log(error)
                    reject({_error: 'User cannot be updated'})
                })
            } else {
                createUser(values)
                .then(createResponse => {
                    console.log('user created successfully')
                    // update the reducer with state
                    // go to next view
                    resolve()
                })
                .catch(error => {
                    console.log(error)
                    reject({_error: 'User cannot be created'})
                })
            }
        })
        .catch(error => {
            console.log(error)
            reject({_error: 'User cannot be located'})
        })
    })
}


// fetch('http://localhost:8080/users', config)
//     .then(response => {
//         if (response.status >= 200 && response.status < 300) {
//             console.log('user created. resolve the promise')
//             console.log(response)
//             resolve()
//         } else {
//             console.log('bad response. reject promise')
//             console.log(response)
//             reject({_error: response.status})
//         }
//     }) // POST request. server does not repond with a json, so no response.json()
//     .catch(error => {
//         console.log('fetching error', error)
//         reject({_error: error})
//     })


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
