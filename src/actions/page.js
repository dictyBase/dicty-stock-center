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

const fetchPageRequest = () => {
  return {
    type: FETCH_PAGE_REQUEST,
    isFetching: true
  }
}

const fetchPageSuccess = content => {
  const { data } = content
  return {
    type: FETCH_PAGE_SUCCESS,
    isFetching: false,
    id: data.id,
    name: data.attributes.name,
    content: data.attributes.content,
    created_by: data.attributes.created_by,
    updated_by: data.attributes.updated_by,
    created_at: data.attributes.created_at,
    updated_at: data.attributes.updated_at,
    slug: data.attributes.slug
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

export const fetchInfoPage = slug => {
  return async dispatch => {
    try {
      dispatch(fetchPageRequest())
      const res = await fetch(`${server}/contents/slug/${slug}`)
      if (res.ok) {
        const json = await res.json()
        dispatch(fetchPageSuccess(json))
      } else {
        const json = await res.json()
        console.log(res, json)
      }
    } catch (error) {
      dispatch(fetchPageFailure(error))
      console.log('fetch failed', error)
    }
  }
}

const doEdit = content => {
  return {
    type: EDIT_PAGE,
    payload: {
      content: content
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
      dispatch(savePageRequest())
      const res = await fetch(`${server}/contents/slug/${page}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const json = await res.json()
        dispatch(savePageSuccess())
        dispatch(push(`/${json.data.attributes.name}/information`))
      } else {
        const json = await res.json()
        console.log(res, json)
      }
    } catch (error) {
      dispatch(savePageFailure(error))
      console.log('fetch failed', error)
    }
  }
}

export const cancelEditing = page => {
  return dispatch => {
    dispatch(push(`/${page}/information`))
  }
}
