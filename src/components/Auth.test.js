import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import AuthLoader from "./Auth"

test("matching a snapshot of AuthLoader", () => {
  const component = renderer.create(<AuthLoader />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
