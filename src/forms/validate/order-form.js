import isEmail from 'validator/lib/isEmail'

const syncValidateUser = data => {
    const requiredFields = [
        'firstName', 'lastName', 'org', 'group', 'address', 'city', 'zip'
    ]
    const errors = {}

    requiredFields.forEach((field) => {
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

export default syncValidateUser
