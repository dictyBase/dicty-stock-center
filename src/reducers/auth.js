// @flow
import { dsctypes } from "constants/dsctypes"

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} = dsctypes

const authReducer = (state: Object = {}, action: Object) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        isAuthenticated: false,
        provider: action.payload.provider
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.token ? true : false,
        token: action.payload.token,
        user: action.payload.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        isAuthenticated: false,
        error: action.payload.error,
        provider: null
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        isAuthenticated: false,
        provider: null,
        user: null,
        token: null
      }
    default:
      return state
  }
}
export default authReducer
