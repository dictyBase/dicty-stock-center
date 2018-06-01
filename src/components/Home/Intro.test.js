import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { Intro } from "./Intro"

test("matching a snapshot of Intro", () => {
  const fetchInfoPage = () => {}
  const page = {
    data: {
      attributes: {},
    },
  }

  const component = renderer.create(
    <Intro page={page} fetchInfoPage={fetchInfoPage} isFetching={false} />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
