import types from 'constants'

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  SAVE_PAGE_FAILURE,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE
} = types

const initialState = {
  content: null
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PAGE_SUCCESS:
      const slugName = state[action.slug]
      return {
        ...state,
        isFetching: false,
        slug: action.slug,
        // data: action.payload
        [action.slug]: {
          ...slugName,
          id: action.id,
          name: action.name,
          content: action.content,
          created_by: action.created_by,
          updated_by: action.updated_by,
          created_at: action.created_at,
          updated_at: action.updated_at,
          slug: action.slug
        }
      }
    case FETCH_PAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
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
        error: action.error
      }
    default:
      return state
  }
}

export default pageReducer
