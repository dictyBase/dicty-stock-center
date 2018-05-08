// @flow
import { dsctypes } from "constants/dsctypes"
import querystring from "querystring"
import oauthConfig from "utils/oauthConfig"
import {
  oauthEndpointResource,
  fetchUserByIdResource,
  fetchRoleByIdResource
} from "utils/fetchResources"
import { push } from "react-router-redux"

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_ROLE_REQUEST,
  FETCH_ROLE_SUCCESS,
  FETCH_ROLE_FAILURE,
  FETCH_PERMISSION_REQUEST,
  FETCH_PERMISSION_SUCCESS,
  FETCH_PERMISSION_FAILURE
} = dsctypes

type oauthArg = { query: string, provider: string, url: string }

const makeOauthConfig = ({ query, provider, url }: oauthArg) => {
  const parsed = querystring.parse(query.replace("?", ""))
  let body = `client_id=${oauthConfig[provider].clientId}&redirect_url=${url}`
  body += `&state=${parsed.state}&code=${parsed.code}`
  body += `&scopes=${oauthConfig[provider].scopes[0]}`
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body
  }
  const endpoint = `${oauthEndpointResource}/${provider}`
  return { config, endpoint }
}

const requestLogin = provider => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      isFetching: true,
      provider: provider
    }
  }
}

const receiveLogin = ({ user, token }) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      token: token,
      user: user
    }
  }
}

const loginError = error => {
  return {
    type: LOGIN_FAILURE,
    payload: {
      isFetching: false,
      error: error
    }
  }
}

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      isFetching: false
    }
  }
}

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
    payload: {
      isFetching: true
    }
  }
}

const fetchUserSuccess = (json: Object) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      isFetching: false,
      json
    }
  }
}

const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: {
      error: error
    }
  }
}

const fetchRoleRequest = () => {
  return {
    type: FETCH_ROLE_REQUEST,
    payload: {
      isFetching: true
    }
  }
}

const fetchRoleSuccess = (json: Object) => {
  return {
    type: FETCH_ROLE_SUCCESS,
    payload: {
      isFetching: false,
      roles: json
    }
  }
}

const fetchRoleFailure = error => {
  return {
    type: FETCH_ROLE_FAILURE,
    payload: {
      error: error
    }
  }
}

const fetchPermissionRequest = () => {
  return {
    type: FETCH_PERMISSION_REQUEST,
    payload: {
      isFetching: true
    }
  }
}

const fetchPermissionSuccess = (json: Object) => {
  return {
    type: FETCH_PERMISSION_SUCCESS,
    payload: {
      isFetching: false,
      permissions: json
    }
  }
}

const fetchPermissionFailure = error => {
  return {
    type: FETCH_PERMISSION_FAILURE,
    payload: {
      error: error
    }
  }
}

// Calls the API to get a token and
// dispatch actions along the way
export const oAuthLogin = ({ query, provider, url }: oauthArg) => {
  return async (dispatch: Function) => {
    const { config, endpoint } = makeOauthConfig({ query, provider, url })
    try {
      dispatch(requestLogin(provider))
      dispatch(push("/load/auth"))
      const res = await fetch(endpoint, config)
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        if (res.ok) {
          const data = await res.json()
          dispatch(receiveLogin(data))
          dispatch(fetchRoleInfo(data.user.id))
          dispatch(push("/mydsc"))
        } else if (res.status === 401) {
          // user has invalid credentials, redirect with notification
          dispatch(loginError(res.statusText))
          dispatch(push("/login"))
        } else {
          dispatch(loginError(res.statusText)) // <-- where the login request currently hits
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
        console.log(res)
        dispatch(loginError(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(loginError(error))
      dispatch(push("/error"))
    }
  }
}

// Logs the user out
export const logoutUser = () => {
  return (dispatch: Function) => {
    dispatch(receiveLogout())
  }
}

// fetch user function that fetches data using async/await
// checks if header is correct, then either grabs data or displays error
export const fetchUserInfo = (userId: string) => {
  return async (dispatch: Function) => {
    try {
      dispatch(fetchUserRequest())
      const res = await fetch(`${fetchUserByIdResource}/${userId}`, {
        mode: "no-cors"
      })
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(fetchUserSuccess(json))
        } else {
          if (process.env.NODE_ENV !== "production") {
            printError(res, json)
          }
          dispatch(fetchUserFailure(json.errors[0].title))
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
        dispatch(fetchUserFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(fetchUserFailure(error))
      dispatch(push("/error"))
      if (process.env.NODE_ENV !== "production") {
        console.error(`Network error: ${error.message}`)
      }
    }
  }
}

// fetch roles function that fetches data using async/await
// checks if header is correct, then either grabs data or displays error
export const fetchRoleInfo = (userId: string) => {
  return async (dispatch: Function) => {
    try {
      dispatch(fetchRoleRequest())
      const res = await fetch(`${fetchUserByIdResource}/${userId}/roles`)
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(fetchRoleSuccess(json))
          dispatch(fetchPermissionInfo(json.data[0].id))
        } else {
          if (process.env.NODE_ENV !== "production") {
            printError(res, json)
          }
          dispatch(fetchRoleFailure(json.errors[0].title))
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
        dispatch(fetchRoleFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(fetchRoleFailure(error))
      dispatch(push("/error"))
      if (process.env.NODE_ENV !== "production") {
        console.error(`Network error: ${error.message}`)
      }
    }
  }
}

// fetch permissions function that fetches data using async/await
// checks if header is correct, then either grabs data or displays error
export const fetchPermissionInfo = (roleId: string) => {
  return async (dispatch: Function) => {
    try {
      dispatch(fetchPermissionRequest())
      const res = await fetch(`${fetchRoleByIdResource}/${roleId}/permissions`)
      const contentType = res.headers.get("content-type")
      if (contentType && contentType.includes("application/vnd.api+json")) {
        const json = await res.json()
        if (res.ok) {
          dispatch(fetchPermissionSuccess(json))
        } else {
          if (process.env.NODE_ENV !== "production") {
            printError(res, json)
          }
          dispatch(fetchPermissionFailure(json.errors[0].title))
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
        dispatch(fetchPermissionFailure(res.body))
        dispatch(push("/error"))
      }
    } catch (error) {
      dispatch(fetchPermissionFailure(error))
      dispatch(push("/error"))
      if (process.env.NODE_ENV !== "production") {
        console.error(`Network error: ${error.message}`)
      }
    }
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
