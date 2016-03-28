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
    if (!data.payerFirstName) {
        errors.payerFirstName = 'Required'
    }
    if (!data.payerLastName) {
        errors.payerLastName = 'Required'
    }
    if (!data.payerOrg) {
        errors.payerOrg = 'Required'
    }
    if (!data.payerGroup) {
        errors.payerGroup = 'Required'
    }
    if (!data.payerAddress) {
        errors.payerAddress = 'Required'
    }
    if (!data.payerCity) {
        errors.payerCity = 'Required'
    }
    if (!data.payerZip) {
        errors.payerZip = 'Required'
    }
    if (!data.payerCountry) {
        errors.payerCountry = 'Required'
    } else if (data.payerCountry === 'select') {
        errors.payerCountry = 'Required'
    }
    if (!data.payerEmail) {
        errors.payerEmail = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.payerEmail)) {
        errors.payerEmail = 'Invalid email address'
    }
    return errors
}

export default validate
