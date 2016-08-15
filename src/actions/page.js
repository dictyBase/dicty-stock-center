import types from 'constants'
import { push } from 'react-router-redux'
import simpleStorage from 'simplestorage.js'

const { EDIT_PAGE } = types

const doEdit = (content) => {
    return {
        type: EDIT_PAGE,
        payload: {
            content: content
        }
    }
}

// const requestPage = () => {
//     return {
//         type: REQUEST_PAGE,
//         isFetching: true
//     }
// }

// const receivePage = (api) => {
//     const { attributes } = api.data
//     return {
//         type: RECEIVE_PAGE,
//         isFetching: false,
//         title: attributes.title,
//         content: attributes.content
//     }
// }

export const editPage = (content, name) => {
    return (dispatch) => {
        dispatch(doEdit(content))
        dispatch(push(`/${name}/information/edit`))
    }
}

export const saveEditing = (page, data) => {
    return (dispatch) => {
        simpleStorage.set(page, data)
        dispatch(push(`/${page}/information`))
    }
}

export const cancelEditing = (page) => {
    return (dispatch) => {
        dispatch(push(`/${page}/information`))
    }
}
