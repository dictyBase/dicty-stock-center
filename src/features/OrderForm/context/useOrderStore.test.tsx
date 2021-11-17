import { render } from "@testing-library/react"
import React from "react"
import useOrderStore from "./useOrderStore"

const MockComponent = () => {
  const { state } = useOrderStore()
  return <h1>{state?.orderID}</h1>
}

describe("features/OrderForm/context/useOrderStore", () => {
  it("should throw error", () => {
    render(<MockComponent />)
  })
})
