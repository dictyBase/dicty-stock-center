import React from "react"
import useCheckboxes from "./useCheckboxes"
import { renderHook, act, cleanup } from "@testing-library/react-hooks"
import {
  CatalogProvider,
  CatalogContext,
  catalogReducer,
  strainInitialState,
} from "features/Stocks/Catalogs/context/CatalogContext"

const cartData = {
  id: "DBS123456",
  name: "test strain",
  summary: "a test strain summary",
  in_stock: true,
}

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=gwdi",
    }),
  }
})

describe("hooks/useCheckboxes", () => {
  afterEach(() => cleanup)

  it("handles unchecked item correctly", () => {
    const wrapper = ({ children }: any) => (
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
    const MockProvider = ({ children }: any) => {
      const [state, dispatch] = React.useReducer(catalogReducer, {
        ...strainInitialState,
        checkedItems: [cartData],
      })
      return (
        <CatalogContext.Provider value={{ state, dispatch }}>
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

  it("resets all checked items correctly", () => {
    const MockProvider = ({ children }: any) => {
      const [state, dispatch] = React.useReducer(catalogReducer, {
        ...strainInitialState,
        checkedItems: [cartData],
      })
      return (
        <CatalogContext.Provider value={{ state, dispatch }}>
          {children}
        </CatalogContext.Provider>
      )
    }

    const { result } = renderHook(() => useCheckboxes(cartData), {
      wrapper: MockProvider,
    })

    expect(result.current.itemIsChecked).toBe(true)
    act(() => result.current.handleCheckAllChange())
    expect(result.current.itemIsChecked).toBe(false)
  })
})
