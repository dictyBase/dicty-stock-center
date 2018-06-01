import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { OtherMaterials } from "./OtherMaterials"

test("matching a snapshot of OtherMaterials", () => {
  const fetchInfoPage = () => {}
  const page = {
    data: {
      attributes: {},
    },
  }

  const component = renderer.create(
    <OtherMaterials
      page={page}
      fetchInfoPage={fetchInfoPage}
      isFetching={false}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
