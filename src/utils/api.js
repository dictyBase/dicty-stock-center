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
