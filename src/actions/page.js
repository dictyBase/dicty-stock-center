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

const fetchPageSuccess = json => {
  return {
    type: FETCH_PAGE_SUCCESS,
    isFetching: false,
    payload: json
  }
}

const fetchPageFailure = error => {
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

const savePageFailure = error => {
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
    dispatch(push(`/information/${name}/edit`))
  }
}

export const editInline = content => {
  return dispatch => {
    dispatch(doEdit(content))
  }
}

export const saveEditing = (id, body) => {
  return async dispatch => {
    try {
      dispatch(savePageRequest())
      const res = await fetch(`${server}/contents/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const json = await res.json()
        dispatch(savePageSuccess())
        dispatch(push(`/information/${json.data.attributes.name}`))
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

export const saveInlineEditing = (id, body) => {
  return async dispatch => {
    try {
      dispatch(savePageRequest())
      const res = await fetch(`${server}/contents/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        dispatch(savePageSuccess())
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
    dispatch(push(`/information/${page}`))
  }
}
