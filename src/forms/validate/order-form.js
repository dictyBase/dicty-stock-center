const validate = data => {
    const errors = {}
    if (!data.firstName) {
        errors.firstName = 'Required'
    }
    if (!data.lastName) {
        errors.lastName = 'Required'
    }
    return errors
}

export default validate
