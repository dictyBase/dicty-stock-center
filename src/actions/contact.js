// import { push } from 'react-router-redux'
import simpleStorage from 'simplestorage.js'

export const submitEmail = (values, dispatch) => {
    return new Promise((resolve, reject) => {
        // save in local storage
        simpleStorage.set('contact', values)
        resolve()
    })
}
