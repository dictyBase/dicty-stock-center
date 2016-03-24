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
    if (!data.address) {
        errors.address = 'Required'
    }
    if (!data.city) {
        errors.city = 'Required'
    }
    if (!data.zip) {
        errors.zip = 'Required'
    }
    if (!data.country) {
        errors.country = 'Required'
    } else if (data.country === 'select') {
        errors.country = 'Required'
    }
    if (!data.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email address'
    }
    if (!data.shipAccount) {
        errors.shipAccount = 'Please select your shipping service'
    }
    if (!data.shipAccountNum) {
        errors.shipAccountNum = 'Required'
    }
    if (!data.billFirstName) {
        errors.billFirstName = 'Required'
    }
    if (!data.billLastName) {
        errors.billLastName = 'Required'
    }
    if (!data.billOrg) {
        errors.billOrg = 'Required'
    }
    if (!data.billGroup) {
        errors.billGroup = 'Required'
    }
    if (!data.billAddress) {
        errors.billAddress = 'Required'
    }
    if (!data.billCity) {
        errors.billCity = 'Required'
    }
    if (!data.billZip) {
        errors.billZip = 'Required'
    }
    if (!data.billCountry) {
        errors.billCountry = 'Required'
    } else if (data.billCountry === 'select') {
        errors.billCountry = 'Required'
    }
    if (!data.billEmail) {
        errors.billEmail = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.billEmail)) {
        errors.billEmail = 'Invalid email address'
    }
    return errors
}

export default validate
