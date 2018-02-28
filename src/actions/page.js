// @flow
import { dsctypes } from "constants/dsctypes"
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

const server = process.env.REACT_APP_API_SERVER

const fetchPageRequest = () => {
  return {
    type: FETCH_PAGE_REQUEST,
    isFetching: true
  }
}

const fetchPageSuccess = (json: Object) => {
  return {
    type: FETCH_PAGE_SUCCESS,
    isFetching: false,
    payload: json
  }
}

const fetchPageFailure = error => {
  return {
    type: FETCH_PAGE_FAILURE,
    error: error
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
    error: error
  }
}

// fetch page function that fetches data using async/await
// checks if header is correct, then either grabs data or displays error
export const fetchInfoPage = (slug: string) => {
  return async (dispatch: Function) => {
    try {
      dispatch(fetchPageRequest())
      if (typeof server !== "string") {
        throw new TypeError()
      }
      const res = await fetch(`${server}/contents/slug/${slug}`)
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(fetchPageSuccess(json))
        } else {
          printError(res, json)
          dispatch(fetchPageFailure(res.body))
          dispatch(push("/error"))
        }
      } else {
        console.log("Not valid JSON")
        dispatch(fetchPageFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(fetchPageFailure(error))
      dispatch(push("/error"))
      console.log(`Network error: ${error.message}`)
    }
  }
}

// helper function to print HTTP errors to console
// responses are structured in JSONAPI format
const printError = (res, json) => {
  console.log("HTTP Error")
  console.log(
    `HTTP Response: ${res.status}
    Title: ${json.errors[0].title}
    Detail: ${json.errors[0].detail}`
  )
}

const doEdit = (content: Object) => {
  return {
    type: EDIT_PAGE,
    payload: {
      content: content
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
  return async (dispatch: Function) => {
    try {
      dispatch(savePageRequest())
      if (typeof server !== "string") {
        throw new TypeError()
      }
      const localData = JSON.parse(localStorage.getItem("auth"))
      const res = await fetch(`${server}/contents/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Application: `Bearer: ${localData.token}`
        }
      })
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(savePageSuccess())
          dispatch(push(`/information/${json.data.attributes.name}`))
        } else {
          printError(res, json)
          dispatch(savePageFailure(res.body))
          dispatch(push("/error"))
        }
      } else {
        console.log("Not valid JSON")
        dispatch(savePageFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(savePageFailure(error))
      dispatch(push("/error"))
      console.log(`Network error: ${error.message}`)
    }
  }
}

export const saveInlineEditing = (id: string, body: Object) => {
  return async (dispatch: Function) => {
    try {
      dispatch(savePageRequest())
      if (typeof server !== "string") {
        throw new TypeError()
      }
      const localData = JSON.parse(localStorage.getItem("auth"))
      const res = await fetch(`${server}/contents/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Application: `Bearer: ${localData.token}`
        }
      })
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(savePageSuccess())
        } else {
          printError(res, json)
          dispatch(savePageFailure(res.body))
          dispatch(push("/error"))
        }
      } else {
        console.log("Not valid JSON")
        dispatch(savePageFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(savePageFailure(error))
      dispatch(push("/error"))
      console.log(`Network error: ${error.message}`)
    }
  }
}

export const cancelEditing = (page: string) => {
  return (dispatch: Function) => {
    dispatch(push(`/information/${page}`))
  }
}
