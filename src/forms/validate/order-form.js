import isEmail from 'validator/lib/isEmail'

const validate = data => {
    const requiredFields = [
        'firstName', 'lastName', 'org', 'group', 'address', 'city', 'zip',
        'shipAccount', 'payerFirstName', 'payerLastName', 'payerOrg', 'payerGroup',
        'payerAddress', 'payerCity', 'payerZip', 'payMethod'
    ]
    const validateEmail = [ 'email', 'payerEmail' ]
    const validateCountry = [ 'country', 'payerCountry' ]
    const errors = {}

    requiredFields.forEach((field) => {
        if (!data[field]) {
            errors[field] = 'required'
        }
    })

    validateEmail.forEach((field) => {
        if (!data[field]) {
            errors[field] = 'required'
        } else if (!isEmail(data[field])) {
            errors[field] = 'invalid email address'
        }
    })

    validateCountry.forEach((field) => {
        if (!data[field]) {
            errors[field] = 'required'
        } else if (data[field] === 'select') {
            errors[field] = 'required'
        }
    })

    return errors
}

export default validate
