import { dsctypes } from "../constants"

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} = dsctypes

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: false,
        provider: action.provider,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.token ? true : false,
        user: action.user,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: false,
        error: action.error,
        provider: null,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: false,
        provider: null,
        user: null,
      }
    default:
      return state
  }
}
export default authReducer
