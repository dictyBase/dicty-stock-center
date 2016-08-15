import types from 'constants'
import { push } from 'react-router-redux'
import simpleStorage from 'simplestorage.js'

const { EDIT_PAGE, SAVE_PAGE_REQUEST, SAVE_PAGE_SUCCESS } = types

const doEdit = (content) => {
    return {
        type: EDIT_PAGE,
        payload: {
            content: content
        }
    }
}

const savePageRequest = () => {
    return {
        type: SAVE_PAGE_REQUEST,
        isFetching: true
    }
}

const savePageSuccess = () => {
    return {
        type: SAVE_PAGE_SUCCESS,
        isFetching: false
    }
}

export const editPage = (content, name) => {
    return (dispatch) => {
        dispatch(doEdit(content))
        dispatch(push(`/${name}/information/edit`))
    }
}

export const saveEditing = (page, data) => {
    return (dispatch) => {
        dispatch(savePageRequest())
        simpleStorage.set(page, data)
        dispatch(savePageSuccess())

        dispatch(push(`/${page}/information`))
    }
}

export const cancelEditing = (page) => {
    return (dispatch) => {
        dispatch(push(`/${page}/information`))
    }
}
