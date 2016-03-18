const validate = data => {
    const errors = {}
    if (!data.firstName) {
        errors.firstName = 'Required'
    }
    if (!data.lastName) {
        errors.lastName = 'Required'
    }
    if (!data.org) {
        errors.org = 'Required'
    }
    if (!data.group) {
        errors.group = 'Required'
    }
    return errors
}

export default validate
