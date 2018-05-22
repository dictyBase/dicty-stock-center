import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { About } from "./About"

test("matching a snapshot of About", () => {
  const fetchInfoPage = () => {}
  const page = {
    data: {
      attributes: {}
    }
  }

  const component = renderer.create(
    <About page={page} fetchInfoPage={fetchInfoPage} isFetching={false} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
