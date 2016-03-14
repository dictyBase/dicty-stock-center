import simpleStorage from 'simplestorage.js'

const submitForm = (data) => {
    simpleStorage.set('formdata', data)
}

export default submitForm
