// @flow
import { dsctypes } from "constants/dsctypes"
import querystring from "querystring"
import oauthConfig from "utils/oauthConfig"
import { oauthEndpointResource } from "utils/fetchResources"
import { push } from "react-router-redux"

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } = dsctypes

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
          dispatch(push("/mydsc"))
        } else {
          dispatch(loginError(res.body))
          dispatch(push("/error"))
        }
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.error("Cannot convert to JSON")
        }
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
