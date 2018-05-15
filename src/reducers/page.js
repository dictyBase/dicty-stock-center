// @flow
import { dsctypes } from "constants/dsctypes"

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  SAVE_PAGE_FAILURE,
  SAVE_INLINE_PAGE_SUCCESS,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE
} = dsctypes

const initialState = {
  content: null
}

const pageReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_PAGE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PAGE_SUCCESS:
      const slugName = action.payload.json.data.attributes.slug
      return {
        ...state,
        isFetching: false,
        [slugName]: action.payload.json
      }
    case FETCH_PAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case EDIT_PAGE:
      return {
        ...state,
        content: action.payload.content
      }
    case SAVE_PAGE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case SAVE_PAGE_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case SAVE_PAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case SAVE_INLINE_PAGE_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default pageReducer
