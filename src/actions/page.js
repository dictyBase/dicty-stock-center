// @flow
import { dsctypes } from "constants/dsctypes"
import { push } from "connected-react-router"

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  SAVE_PAGE_FAILURE,
  SAVE_INLINE_PAGE_SUCCESS,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE,
} = dsctypes

const server = process.env.REACT_APP_API_SERVER

export const fetchInfoPage = (slug: string) => ({
  types: [FETCH_PAGE_REQUEST, FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE],
  url: `${server}/contents/slug/${slug}`,
  config: {
    headers: {
      "content-type": "application/vnd.api+json",
    },
  },
})

export const doEdit = (content: Object) => ({
  type: EDIT_PAGE,
  payload: {
    content,
  },
})

export const editPage = (content: Object, name: string) => (
  dispatch: Function,
) => {
  dispatch(doEdit(content))
  dispatch(push(`/information/${name}/edit`))
}

export const editInline = (content: Object) => (dispatch: Function) => {
  dispatch(doEdit(content))
}

export const saveEditing = (id: string, body: Object) => ({
  types: [SAVE_PAGE_REQUEST, SAVE_PAGE_SUCCESS, SAVE_PAGE_FAILURE],
  url: `${server}/contents/${id}`,
  config: {
    method: "PATCH",
    body: JSON.stringify(body),
  },
})

export const saveInlineEditing = (id: string, body: Object) => ({
  types: [SAVE_PAGE_REQUEST, SAVE_INLINE_PAGE_SUCCESS, SAVE_PAGE_FAILURE],
  url: `${server}/contents/${id}`,
  config: {
    method: "PATCH",
    body: JSON.stringify(body),
  },
})

export const cancelEditing = (page: string) => (dispatch: Function) => {
  dispatch(push(`/information/${page}`))
}
