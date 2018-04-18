// currently broken, needs to be fixed

import * as actions from "actions/order/submit"
import { dsctypes } from "constants/dsctypes"
import nock from "nock"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const { SUBMIT_REQUEST, SUBMIT_SUCCESS } = dsctypes

let server = "http://localhost:8080" // API_SERVER

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const order = {
  consumer: { type: "user", id: "john@gmail.com" },
  shipping: { account: "Fedex", accountNum: "123456", comments: "" },
  payer: { type: "user", id: "john@gmail.com" },
  payment: { method: "Credit", poNum: "" }
}

describe("async actions/order", () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it("creates SUBMIT_SUCCESS when submitting the order has been completed", () => {
    nock(server)
      .post("/orders")
      .reply(201, { body: { data: { type: "order", id: "2555" } } })

    const expectedActions = [
      { type: SUBMIT_REQUEST, submitting: true },
      { type: SUBMIT_SUCCESS, submitting: false, order }
    ]
    const store = mockStore({ order: order })

    // return store.dispatch(actions.submitOrder()).then(() => {
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
  })
})
