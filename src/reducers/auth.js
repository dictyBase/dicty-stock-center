// @flow
import { dsctypes } from "constants/dsctypes"

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
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
        user: action.payload.user,
        userId: action.payload.userId
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
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userData: action.payload.json
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case FETCH_ROLE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_ROLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        roleData: action.payload.json
      }
    case FETCH_ROLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case FETCH_PERMISSION_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PERMISSION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        permissionData: action.payload.json
      }
    case FETCH_PERMISSION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
export default authReducer
