import React from "react"
import useCheckboxes from "./useCheckboxes"
import { renderHook, act, cleanup } from "react-hooks-testing-library"
import {
  CatalogProvider,
  CatalogContext,
  catalogReducer,
} from "components/Stocks/Catalogs/common/CatalogContext"

const cartData = {
  id: "DBS123456",
  name: "test strain",
  summary: "a test strain summary",
}

describe("hooks/useCheckboxes", () => {
  afterEach(() => cleanup)

  it("handles unchecked item correctly", () => {
    const wrapper = ({ children }) => (
      <CatalogProvider>{children}</CatalogProvider>
    )
    const {
      result: { current },
    } = renderHook(() => useCheckboxes(cartData), { wrapper })
    expect(current.itemIsChecked).toBe(false)

    act(() => current.handleCheckboxChange())
    expect(current.itemIsChecked).toBe(false)
  })

  it("handles checked item correctly", () => {
    const MockProvider = ({ children }) => {
      const [state, dispatch] = React.useReducer(catalogReducer, {
        checkedItems: [cartData],
      })

      return (
        <CatalogContext.Provider value={[state, dispatch]}>
          {children}
        </CatalogContext.Provider>
      )
    }

    const {
      result: { current },
    } = renderHook(() => useCheckboxes(cartData), { wrapper: MockProvider })
    expect(current.itemIsChecked).toBe(true)

    act(() => current.handleCheckboxChange())
    expect(current.itemIsChecked).toBe(true)
  })
})
