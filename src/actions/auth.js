// @flow
import { dsctypes } from "constants/dsctypes"
import querystring from "querystring"
import oauthConfig from "utils/oauthConfig"
import { push } from "connected-react-router"

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
  FETCH_NON_AUTH_ROLE_REQUEST,
  FETCH_NON_AUTH_ROLE_SUCCESS,
  FETCH_NON_AUTH_ROLE_FAILURE,
  FETCH_PERMISSION_REQUEST,
  FETCH_PERMISSION_SUCCESS,
  FETCH_PERMISSION_FAILURE,
} = dsctypes

type oauthArg = { query: string, provider: string, url: string }
type receiveLoginArg = { user: Object, token: string }

const authServer = process.env.REACT_APP_AUTH_SERVER
const apiServer = process.env.REACT_APP_API_SERVER
const fetchHeaderConfig = {
  headers: {
    "content-type": "application/vnd.api+json",
  },
}

const makeOauthConfig = ({ query, provider, url }: oauthArg) => {
  const parsed = querystring.parse(query.replace("?", ""))
  let body = `client_id=${oauthConfig[provider].clientId}&redirect_url=${url}`
  body += `&state=${parsed.state}&code=${parsed.code}`
  body += `&scopes=${oauthConfig[provider].scopes[0]}`
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
  }
  const endpoint = `${authServer}/tokens/${provider}`
  return { config, endpoint }
}

const createErrorObj = (err: number, msg: string) => ({
  status: err,
  title: msg,
})

const requestLogin = (provider: string) => ({
  type: LOGIN_REQUEST,
  payload: {
    isFetching: true,
    provider: provider,
  },
})

const receiveLogin = ({ user, token }: receiveLoginArg) => ({
  type: LOGIN_SUCCESS,
  payload: {
    isFetching: false,
    token: token,
    user: user,
  },
})

const loginError = (error: Object) => ({
  type: LOGIN_FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  payload: {
    isFetching: false,
  },
})

const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchUserSuccess = (json: Object) => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    isFetching: false,
    json,
  },
})

const fetchUserFailure = (error: Object) => ({
  type: FETCH_USER_FAILURE,
  payload: {
    error: error,
  },
})

const fetchRoleRequest = () => ({
  type: FETCH_ROLE_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchRoleSuccess = (json: Object) => ({
  type: FETCH_ROLE_SUCCESS,
  payload: {
    isFetching: false,
    json,
  },
})

const fetchRoleFailure = (error: Object) => ({
  type: FETCH_ROLE_FAILURE,
  payload: {
    error: error,
  },
})

// Calls the API to get a token and
// dispatch actions along the way
const oAuthLogin = ({ query, provider, url }: oauthArg) => async (
  dispatch: Function,
) => {
  const { config, endpoint } = makeOauthConfig({ query, provider, url })
  try {
    dispatch(requestLogin(provider))
    dispatch(push("/load/auth"))
    const res = await fetch(endpoint, config)
    const contentType = res.headers.get("content-type")
    if (contentType && contentType.includes("application/vnd.api+json")) {
      if (res.ok) {
        const json = await res.json()
        dispatch(receiveLogin(json))
        await dispatch(fetchRoleInfo(json.user.data.id))
        dispatch(push("/mydsc"))
        // history.go(-3)
      } else if (res.status === 401) {
        // user has invalid credentials, redirect with notification
        dispatch(
          loginError(
            createErrorObj(
              res.status,
              `You are not an authorized user of dictyBase.
               Please sign in with proper credentials.`,
            ),
          ),
        )
        dispatch(push("/login"))
      } else {
        dispatch(loginError(createErrorObj(res.status, res.statusText)))
        dispatch(push("/error"))
      }
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.error(res.statusText)
      }
      dispatch(loginError(createErrorObj(res.status, res.statusText)))
      dispatch(push("/error"))
    }
  } catch (error) {
    dispatch(loginError(createErrorObj(error.name, error.message)))
    dispatch(push("/error"))
  }
}

// Logs the user out
const logoutUser = () => (dispatch: Function) => {
  dispatch(receiveLogout())
}

// fetch user function that fetches data using async/await
// checks if header is correct, then either grabs data or displays error
// this is used to get a non-authenticated user's information
const fetchUserInfo = (userId: string) => async (dispatch: Function) => {
  try {
    dispatch(fetchUserRequest())
    const res = await fetch(`${apiServer}/users/${userId}`, fetchHeaderConfig)
    const contentType = res.headers.get("content-type")
    if (contentType && contentType.includes("application/vnd.api+json")) {
      const json = await res.json()
      if (res.ok) {
        dispatch(fetchUserSuccess(json))
        await dispatch(fetchNonAuthRoleInfo(json.data.id))
      } else {
        if (process.env.NODE_ENV !== "production") {
          printError(res, json)
        }
        dispatch(fetchUserFailure(json.errors[0]))
        dispatch(push("/error"))
      }
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.error(res.statusText)
      }
      dispatch(fetchUserFailure(createErrorObj(res.status, res.statusText)))
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

// fetch roles function that fetches data using async/await
// checks if header is correct, then either grabs data or displays error
const fetchRoleInfo = (userId: string) => async (dispatch: Function) => {
  try {
    dispatch(fetchRoleRequest())
    const res = await fetch(
      `${apiServer}/users/${userId}/roles`,
      fetchHeaderConfig,
    )
    const contentType = res.headers.get("content-type")
    if (contentType && contentType.includes("application/vnd.api+json")) {
      const json = await res.json()
      if (res.ok) {
        if (json.data) {
          dispatch(fetchRoleSuccess(json))
          await dispatch(fetchPermissionInfo(json.data[0].id))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          printError(res, json)
        }
        dispatch(fetchRoleFailure(json.errors[0].title))
      }
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.error(res.statusText)
      }
      dispatch(fetchRoleFailure(createErrorObj(res.status, res.statusText)))
    }
  } catch (error) {
    dispatch(fetchUserFailure(error.toString()))
    if (process.env.NODE_ENV !== "production") {
      console.error(`Network error: ${error.message}`)
    }
  }
}

const fetchNonAuthRoleInfo = (userId: string) => ({
  types: [
    FETCH_NON_AUTH_ROLE_REQUEST,
    FETCH_NON_AUTH_ROLE_SUCCESS,
    FETCH_NON_AUTH_ROLE_FAILURE,
  ],
  url: `${apiServer}/users/${userId}/roles`,
  config: fetchHeaderConfig,
})

const fetchPermissionInfo = (roleId: string) => ({
  types: [
    FETCH_PERMISSION_REQUEST,
    FETCH_PERMISSION_SUCCESS,
    FETCH_PERMISSION_FAILURE,
  ],
  url: `${apiServer}/roles/${roleId}/permissions`,
  config: fetchHeaderConfig,
})

// helper function to print HTTP errors to console
// responses are structured in JSONAPI format
const printError = (res, json) => {
  console.error("HTTP Error")
  console.error(
    `HTTP Response: ${res.status}
    Title: ${json.errors[0].title}
    Detail: ${json.errors[0].detail}`,
  )
}

export {
  requestLogin,
  receiveLogin,
  loginError,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchRoleRequest,
  fetchRoleSuccess,
  fetchRoleFailure,
  oAuthLogin,
  logoutUser,
  fetchUserInfo,
  fetchRoleInfo,
  fetchNonAuthRoleInfo,
  fetchPermissionInfo,
}
