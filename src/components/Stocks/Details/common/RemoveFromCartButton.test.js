import React from "react"
import { shallow } from "enzyme"
import RemoveFromCartButton from "./RemoveFromCartButton"
import Button from "@material-ui/core/Button"
import * as ReactRedux from "react-redux"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"

describe("Stocks/Details/common/RemoveFromCartButton", () => {
  let wrapper
  let store
  beforeEach(() => {
    /* mocking store */
    store = configureStore([thunk])({
      cart: {
        addedItems: [
          {
            id: "DBS123456",
            name: "test1",
            summary: "this is a test summary",
            type: "strain",
          },
        ],
      },
    })
    /* mocking useDispatch on mock store  */
    jest
      .spyOn(ReactRedux, "useDispatch")
      .mockImplementation(() => store.dispatch)
    wrapper = shallow(<RemoveFromCartButton id="DBS123456" />)
  })
  describe("initial render", () => {
    it("always renders Button", () => {
      expect(wrapper.find(Button).exists()).toBe(true)
    })
  })
  describe("button click behavior", () => {
    it("calls dispatch on click", () => {
      wrapper.find(Button).simulate("click")
      const actions = store.getActions()
      const expectedPayload = {
        type: "REMOVE_FROM_CART",
        payload: { removeIndex: 0 },
      }
      expect(actions).toEqual([expectedPayload])
    })
  })
})
