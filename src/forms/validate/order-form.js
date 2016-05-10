import isEmail from 'validator/lib/isEmail'

const requiredUserFields = [
    'firstName', 'lastName', 'org', 'group', 'address', 'city', 'zip'
]


const validateUser = data => {
    const errors = {}
    requiredUserFields.forEach((field) => {
        if (!data[field]) {
            errors[field] = 'Required field'
        }
    })
    if (!data.email) {
        errors.email = 'Required field'
    } else if (!isEmail(data.email)) {
        errors.email = 'Invalid email address'
    }

    if (!data.country) {
        errors.country = 'Required field'
    } else if (data.country === 'select') {
        errors.country = 'Required field'
    }
    return errors
}

export const syncValidateShipping = data => {
    let errors = {}
    errors = validateUser(data)

    if (!data.shipAccount) {
        errors.shipAccount = 'Required field'
    }
    if (!data.shipAccountNum && !(data.shipAccount === 'WillCall')) {
        errors.shipAccountNum = 'Required field'
    }
    return errors
}
