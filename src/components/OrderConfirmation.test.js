import React from "react"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { OrderConfirmation } from "./OrderConfirmation"

test("matching a snapshot of OrderConfirmation", () => {
  const order = {
    id: "test"
  }

  const component = renderer.create(
    <BrowserRouter>
      <OrderConfirmation order={order} />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
