import types from 'constants'
import { push } from 'react-router-redux'
import pageContent from 'utils/temp/content.json'

const { EDIT_PAGE, RECEIVE_PAGE } = types

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

const receivePage = (api) => {
    const { attributes } = api.data
    return {
        type: RECEIVE_PAGE,
        isFetching: false,
        title: attributes.title,
        content: attributes.content
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

export const fetchHomepage = () => {
    return (dispatch) => {
        dispatch(receivePage(pageContent))
    }
}
