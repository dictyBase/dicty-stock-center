import { dsctypes } from 'constants/index'
import querystring from 'querystring'
import oauthConfig from 'utils/oauthConfig'
import { push } from 'react-router-redux'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } = dsctypes
// Getting the url of auth server
const authserver = process.env.REACT_APP_AUTH_SERVER

const makeOauthConfig = ({ query, provider, url }) => {
  const parsed = querystring.parse(query.replace('?', ''))
  let body = `client_id=${oauthConfig[provider].clientId}&redirect_url=${url}`
  body += `&state=${parsed.state}&code=${parsed.code}`
  body += `&scopes=${oauthConfig[provider].scopes[0]}`
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  }
  const endpoint = `${authserver}/tokens/${provider}`
  return { config, endpoint }
}

const requestLogin = provider => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    provider: provider
  }
}

const receiveLogin = ({ user, token }) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    token: token,
    user: user
  }
}

const loginError = error => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    error: error
  }
}

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false
  }
}

// Calls the API to get a token and
// dispatch actions along the way
export const oAuthLogin = ({ query, provider, url }) => {
  return async dispatch => {
    const { config, endpoint } = makeOauthConfig({ query, provider, url })
    try {
      dispatch(requestLogin(provider))
      dispatch(push('/load/auth'))
      const res = await fetch(endpoint, config)
      const contentType = res.headers.get('content-type')
      if (contentType && contentType.includes('application/vnd.api+json')) {
        if (res.ok) {
          const data = await res.json()
          dispatch(receiveLogin(data))
          dispatch(push('/mydsc'))
        } else {
          dispatch(loginError(res.body))
          dispatch(push('/error'))
        }
      }
    } catch (error) {
      dispatch(loginError(error))
      dispatch(push('/error'))
    }
  }
}

// Logs the user out
export const logoutUser = () => {
  return dispatch => {
    dispatch(receiveLogout())
  }
}
