// @flow
import { dsctypes } from "constants/dsctypes"
import {
  fetchBySlugResource,
  fetchByIdResource,
  fetchHeaderConfig
} from "utils/fetchResources"
import { push } from "react-router-redux"

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

export const fetchInfoPage = (slug: string) => {
  return {
    types: [FETCH_PAGE_REQUEST, FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE],
    url: `${fetchBySlugResource}/${slug}`,
    config: fetchHeaderConfig
  }
}

const doEdit = (content: Object) => {
  return {
    type: EDIT_PAGE,
    payload: {
      content
    }
  }
}

export const editPage = (content: Object, name: string) => {
  return (dispatch: Function) => {
    dispatch(doEdit(content))
    dispatch(push(`/information/${name}/edit`))
  }
}

export const editInline = (content: Object) => {
  return (dispatch: Function) => {
    dispatch(doEdit(content))
  }
}

export const saveEditing = (id: string, body: Object) => {
  return {
    types: [SAVE_PAGE_REQUEST, SAVE_PAGE_SUCCESS, SAVE_PAGE_FAILURE],
    url: `${fetchByIdResource}/${id}`,
    config: {
      method: "PATCH",
      body: JSON.stringify(body)
    }
  }
}

export const saveInlineEditing = (id: string, body: Object) => {
  return {
    types: [SAVE_PAGE_REQUEST, SAVE_INLINE_PAGE_SUCCESS, SAVE_PAGE_FAILURE],
    url: `${fetchByIdResource}/${id}`,
    config: {
      method: "PATCH",
      body: JSON.stringify(body)
    }
  }
}

export const cancelEditing = (page: string) => {
  return (dispatch: Function) => {
    dispatch(push(`/information/${page}`))
  }
}
