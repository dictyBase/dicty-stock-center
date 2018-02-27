// @flow
import { createOrder } from "utils/api"
import { status, json } from "utils/fetch"
import { push } from "react-router-redux"
import { dsctypes } from "constants/dsctypes"

const { SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE } = dsctypes

const submitRequest = () => {
  return {
    type: SUBMIT_REQUEST,
    submitting: true
  }
}

const submitSuccess = (order: Object) => {
  return {
    type: SUBMIT_SUCCESS,
    submitting: false,
    order
  }
}

const submitFailure = (error: string) => {
  return {
    type: SUBMIT_FAILURE,
    submitting: false,
    error
  }
}

let server = process.env.REACT_APP_API_SERVER
// submit dsc order and redirect user to a confirmation page
export const submitOrder = () => {
  return (dispatch: Function, getState: Function) => {
    const { order } = getState()
    dispatch(submitRequest())
    dispatch(push("/order/submitting"))
    createOrder(server, order)
      .then(status)
      .then(json)
      .then(response => {
        dispatch(submitSuccess(response.data))
        dispatch(push("/order/submitted"))
      })
      .catch(error => {
        dispatch(submitFailure(error))
        dispatch(push("/error"))
      })
  }
}
