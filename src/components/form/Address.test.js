import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Address from "./Address"

test("matching a snapshot of Address", () => {
  const address = { value: "n michigan", touched: true }
  const address2 = { value: "floor 1", touched: true }
  const city = { value: "chicago", touched: true }
  const state = { value: "IL", touched: true }
  const zip = { value: "65222", touched: true }
  const country = { value: "USA", touched: true }

  const component = renderer.create(
    <Address
      address={address}
      address2={address2}
      city={city}
      state={state}
      zip={zip}
      country={country}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
