import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import LinkList from "./LinkList"

test("matching a snapshot of LinkList", () => {
  const list = []

  const component = renderer.create(<LinkList list={list} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
