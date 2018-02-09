import { dsctypes } from "./../constants"
import { push } from "react-router-redux"
import simpleStorage from "simplestorage.js"

// fake data for "information" pages
import infoPages from "fake-data/infoPages"

const {
  EDIT_PAGE,
  SAVE_PAGE_REQUEST,
  SAVE_PAGE_SUCCESS,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
} = dsctypes

const doEdit = content => {
  return {
    type: EDIT_PAGE,
    payload: {
      content: content,
    },
  }
}

const fetchPageRequest = () => {
  return {
    type: FETCH_PAGE_REQUEST,
    isFetching: true,
  }
}

const fetchPageSuccess = content => {
  const { id, attributes } = content.data
  return {
    type: FETCH_PAGE_SUCCESS,
    isFetching: false,
    page: id,
    content: attributes.content,
    lastEdited: attributes.lastEdited,
  }
}

const savePageRequest = () => {
  return {
    type: SAVE_PAGE_REQUEST,
    isFetching: true,
  }
}

const savePageSuccess = () => {
  return {
    type: SAVE_PAGE_SUCCESS,
    isFetching: false,
  }
}

export const fetchInfoPage = page => {
  return dispatch => {
    dispatch(fetchPageRequest())

    // if there is raw draftjs data for the specific page in localstorage,
    // then display that. Otherwise display the default fake page content.
    let content
    if (simpleStorage.get(page)) {
      content = simpleStorage.get(page)
    } else {
      content = infoPages[page]
    }
    const pageContent = {
      data: {
        type: "page",
        id: page,
        attributes: {
          content: content,
          lastEdited: {
            author: {
              name: "John Smith",
              role: "curator",
            },
            time: "2016-08-08T14:30:00",
          },
        },
      },
    }
    setTimeout(() => {
      dispatch(fetchPageSuccess(pageContent))
    }, 1000)
  }
}

export const editPage = (content, name) => {
  return dispatch => {
    dispatch(doEdit(content))
    dispatch(push(`/${name}/information/edit`))
  }
}

export const saveEditing = (page, data) => {
  return dispatch => {
    dispatch(savePageRequest())

    // save data in localstorage.
    // ex: order/information --> {order: {..raw draftjs data..}}
    // ex: payment/information --> {payment: {..raw draftjs data..}}
    simpleStorage.set(page, data)
    dispatch(savePageSuccess())

    dispatch(push(`/${page}/information`))
  }
}

export const cancelEditing = page => {
  return dispatch => {
    dispatch(push(`/${page}/information`))
  }
}
