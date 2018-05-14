// @flow
import { dsctypes } from "constants/dsctypes"
import {
  fetchBySlugResource,
  fetchByIdResource,
  fetchHeaderConfig
} from "utils/fetchResources"
import { push } from "react-router-redux"

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  SAVE_PAGE_FAILURE,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE
} = dsctypes

const savePageRequest = () => {
  return {
    type: SAVE_PAGE_REQUEST,
    payload: {
      isFetching: true
    }
  }
}

const savePageSuccess = () => {
  return {
    type: SAVE_PAGE_SUCCESS,
    payload: {
      isFetching: false
    }
  }
}

const savePageFailure = error => {
  return {
    type: SAVE_PAGE_FAILURE,
    payload: {
      error
    }
  }
}

export const fetchInfoPage = (slug: string) => {
  return {
    types: [FETCH_PAGE_REQUEST, FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE],
    url: `${fetchBySlugResource}/${slug}`,
    config: fetchHeaderConfig
  }
}

// helper function to print HTTP errors to console
// responses are structured in JSONAPI format
const printError = (res, json) => {
  console.error("HTTP Error")
  console.error(
    `HTTP Response: ${res.status}
    Title: ${json.errors[0].title}
    Detail: ${json.errors[0].detail}`
  )
}

const doEdit = (content: Object) => {
  return {
    type: EDIT_PAGE,
    payload: {
      content
    }
  }
}

export const editPage = (content: Object, name: string) => {
  return (dispatch: Function) => {
    dispatch(doEdit(content))
    dispatch(push(`/information/${name}/edit`))
  }
}

export const editInline = (content: Object) => {
  return (dispatch: Function) => {
    dispatch(doEdit(content))
  }
}

export const saveEditing = (id: string, body: Object) => {
  return async (dispatch: Function, getState: Function) => {
    try {
      dispatch(savePageRequest())
      const res = await fetch(`${fetchByIdResource}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Application: `Bearer: ${getState().auth.token}`
        }
      })
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(savePageSuccess())
          dispatch(push(`/information/${json.data.attributes.name}`))
        } else {
          if (process.env.NODE_ENV !== "production") {
            printError(res, json)
          }
          dispatch(savePageFailure(res.body))
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
        dispatch(savePageFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(savePageFailure(error))
      dispatch(push("/error"))
      if (process.env.NODE_ENV !== "production") {
        console.error(`Network error: ${error.message}`)
      }
    }
  }
}

export const saveInlineEditing = (id: string, body: Object) => {
  return async (dispatch: Function, getState: Function) => {
    try {
      dispatch(savePageRequest())
      const res = await fetch(`${fetchByIdResource}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Application: `Bearer: ${getState().auth.token}`
        }
      })
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(savePageSuccess())
        } else {
          if (process.env.NODE_ENV !== "production") {
            printError(res, json)
          }
          dispatch(savePageFailure(res.body))
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
        dispatch(savePageFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(savePageFailure(error))
      dispatch(push("/error"))
      if (process.env.NODE_ENV !== "production") {
        console.error(`Network error: ${error.message}`)
      }
    }
  }
}

export const cancelEditing = (page: string) => {
  return (dispatch: Function) => {
    dispatch(push(`/information/${page}`))
  }
}
