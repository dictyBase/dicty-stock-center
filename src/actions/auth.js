import types from '../constants'
import querystring from 'querystring'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } = types

const requestLogin = creds => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        fake: true,
        creds
    }
}

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user
    }
}

const loginError = message => {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
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

export const oAuthLogin = query => {
    return dispatch => {
        const parsed = querystring.parse(query)
        console.log(parsed.state)
        dispatch(requestLogin())
    }
}

// Calls the API to get a token and
// dispatches actions along the way
export const loginUser = creds => {
    return dispatch => {
        let config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${creds.username}&password=${creds.password}`
        }

    // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds))

        fetch('http://localhost:3001/sessions/create', config)
          .then(status)
          .then(json)
          .then(user => {
            // If login was successful, set the token in local storage
              localStorage.setItem('id_token', user.id_token)

        // Dispatch the success action
              dispatch(receiveLogin(user))
          }).catch(error => {
              dispatch(loginError(error))
          })
    }
}

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

// Logs the user out
export const logoutUser = () => {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('id_token')
        dispatch(receiveLogout())
    }
}
