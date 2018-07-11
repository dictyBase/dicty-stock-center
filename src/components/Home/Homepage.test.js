import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { Homepage } from "./Homepage"
import configureStore from "store"

const store = configureStore()

test("matching a snapshot of Home/Homepage", () => {
  const props = {
    user: {},
    fullName: "Jane Doe",
  }

  const component = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Homepage {...props} />
      </BrowserRouter>
    </Provider>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
