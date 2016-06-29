import types from '../constants'
import querystring from 'querystring'
import oauthConfig from 'utils/oauthConfig'
import { routeActions } from 'react-router-redux'
import jsr from 'jsrsasign'
import simpleStorage from 'simplestorage.js'


const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } = types

const requestLogin = provider => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        provider: provider
    }
}

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user: user
    }
}

const loginError = error => {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error: error
    }
}

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}


const status = response => {
  // HTTP response codes 2xx indicate that the request was processed successfully
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => {
    return response.json()
}

// Getting the url of auth server
let authserver = AUTH_SERVER
if (process.env.AUTH_SERVER) {
    authserver = process.env.AUTH_SERVER
}
// Calls the API to get a token and
// dispatch actions along the way
export const oAuthLogin = ({query, provider, url}) => {
    return dispatch => {
        const parsed = querystring.parse(query.replace('?', ''))
        let body = `client_id=${oauthConfig[provider].clientId}&redirect_url=${url}`
        body += `&state=${parsed.state}&code=${parsed.code}`
        body += `&scopes=${oauthConfig[provider].scopes[0]}`
        let config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body
        }
        dispatch(requestLogin(provider))
        dispatch(routeActions.push('/load/auth'))
        fetch(`${authserver}/tokens/${provider}`, config)
        .then(status)
        .then(json)
        .then(data => {
            simpleStorage.set('token', data.token)
            const jwtStr = jsr.jws.JWS.parse(data.token)
            dispatch(receiveLogin(jwtStr.payloadObj.user))
            dispatch(routeActions.push('/'))
        }).catch(error => {
            dispatch(loginError(error))
            dispatch(routeActions.push('/error'))
        })
    }
}


// Logs the user out
export const logoutUser = () => {
    return dispatch => {
        simpleStorage.deleteKey('token')
        dispatch(receiveLogout())
        dispatch(routeActions.push('/'))
    }
}
