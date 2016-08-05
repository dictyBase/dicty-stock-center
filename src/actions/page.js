import types from 'constants'
import { push } from 'react-router-redux'

const { EDIT_PAGE } = types

const doEdit = (content) => {
    return {
        type: EDIT_PAGE,
        payload: {
            content: content
        }
    }
}

export const editPage = (content, name) => {
    return (dispatch) => {
        dispatch(doEdit(content))
        dispatch(push(`/page/${name}/edit`))
    }
}

export const editInfoPage = (content, name) => {
    return (dispatch) => {
        dispatch(doEdit(content))
        dispatch(push(`/${name}/information/edit`))
    }
}
