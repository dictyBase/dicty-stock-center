import { polyfill } from 'es6-promise'
polyfill()
import 'isomorphic-fetch'


export const getStrain = (url, id) => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/stocks/${id}?include=characteristics,phenotypes,genotypes,publications`, config)
}
export const getStrainPage = (url, page, size) => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/stocks?page[number]=${page}&page[size]=${size}`, config)
}
export const getPage = (url, page, size, type) => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/stocks?filter[type]=${type}&page[number]=${page}&page[size]=${size}`, config)
}
export const createUser = (url, values) => {
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                type: 'user',
                attributes: {
                    first_name: values.firstName,
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
    return fetch(`${url}/users`, config)
}
export const getUser = (url, id) => {
    let config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/users/${id}`, config)
}

export const updateUser = (url, values) => {
    let config = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                type: 'user',
                id: values.email,
                attributes: {
                    first_name: values.firstName,
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
    return fetch(`${url}/users/${values.email}`, config)
}

// todo: dsc stocks and purchaser info
export const createOrder = (url, order) => {
    const { shipping, payment, consumer, payer } = order
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                type: 'order',
                attributes: {
                    created: '',
                    shipping: {
                        account: shipping.account,
                        account_num: shipping.accountNum,
                        comments: shipping.comments
                    },
                    payment: {
                        method: payment.method,
                        purchase_order: payment.poNum
                    },
                    status: 'Processing'
                },
                relationships: {
                    stocks: {
                        data: [
                            {type: '', id: ''}
                        ]
                    },
                    consumer: {
                        data: {
                            type: consumer.type,
                            id: consumer.id
                        }
                    },
                    payer: {
                        data: {
                            type: payer.type,
                            id: payer.id
                        }
                    },
                    purchaser: {
                        data: {
                            type: '',
                            id: ''
                        }
                    }
                }
            }
        })
    }
    return fetch(`${url}/orders`, config)
}
