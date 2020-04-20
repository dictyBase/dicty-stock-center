import React from "react"
import { mount } from "enzyme"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ShoppingCartItemList from "./ShoppingCartItemList"
import { MockCartProvider } from "common/utils/testing"

describe("ShoppingCart/ShoppingCartItemList", () => {
  describe("initial render with both strains and plasmids", () => {
    const addedItems = [
      {
        id: "DBS123",
        name: "test1",
        fee: "$30.00",
        summary: "test summary 1",
      },
      {
        id: "DBP456",
        name: "test2",
        fee: "$15.00",
        summary: "test summary 2",
      },
    ]
    const wrapper = mount(
      <MockCartProvider addedItems={addedItems} mocks={[]}>
        <ShoppingCartItemList />
      </MockCartProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(List)).toHaveLength(1)
    })
  })
})
