import types from 'constants'
import { push } from 'react-router-redux'

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  SAVE_PAGE_FAILURE,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE
} = types

const server = __API_SERVER__

const doEdit = content => {
  return {
    type: EDIT_PAGE,
    payload: {
      content: content
    }
  }
}

const fetchPageRequest = () => {
  return {
    type: FETCH_PAGE_REQUEST,
    isFetching: true
  }
}

const fetchPageSuccess = content => {
  const { id, attributes } = content
  return {
    type: FETCH_PAGE_SUCCESS,
    isFetching: false,
    id: id,
    name: attributes.name,
    content: attributes.content,
    created_by: attributes.created_by,
    updated_by: attributes.updated_by,
    created_at: attributes.created_at,
    updated_at: attributes.updated_at
  }
}

const fetchPageFailure = (error) => {
  return {
    type: FETCH_PAGE_FAILURE,
    payload: error
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

const savePageFailure = (error) => {
  return {
    type: SAVE_PAGE_FAILURE,
    payload: error
  }
}

export const fetchInfoPage = id => {
  return async dispatch => {
    try {
      const res = await fetch(`${server}/contents/${id}`)
      if (res.ok) {
        const json = await res.json()
        await dispatch(fetchPageRequest())
        await setTimeout(() => {
          dispatch(fetchPageSuccess(json.data))
        }, 1000)
      } else {
        console.log(res.json())
      }
    } catch (error) {
      dispatch(fetchPageFailure(error))
      console.log(error) // improve error handling
    }
  }
}

export const editPage = (content, name) => {
  return dispatch => {
    dispatch(doEdit(content))
    dispatch(push(`/${name}/information/edit`))
  }
}

export const saveEditing = (page, data) => {
  return async dispatch => {
    try {
      const res = await fetch(`${server}/contents/${data.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const json = await res.json()
        await dispatch(savePageRequest())
        await dispatch(savePageSuccess())
        dispatch(push(`${json.data.attributes.page}/information`))
        // dispatch(push(`/${page}/information`))
      } else {
        console.log(res.json())
      }
    } catch (error) {
      dispatch(savePageFailure(error))
      console.log(error) // improve error handling
    }
  }
}

export const cancelEditing = page => {
  return dispatch => {
    dispatch(push(`/${page}/information`))
  }
}
