import React from "react"
import useCheckboxes from "./useCheckboxes"
import { renderHook, act, cleanup } from "@testing-library/react-hooks"
import {
  CatalogProvider,
  CatalogContext,
  catalogReducer,
  strainInitialState,
} from "features/Stocks/Catalogs/context/CatalogContext"
import { fees } from "common/constants/fees"

const cartData = {
  id: "DBS123456",
  name: "test strain",
  summary: "a test strain summary",
  fee: fees.STRAIN_FEE,
  quantity: 1,
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
      <CatalogProvider stockType="strain">{children}</CatalogProvider>
    )
    const {
      result: { current },
    } = renderHook(() => useCheckboxes(), { wrapper })
    expect(current.itemIsChecked(cartData)).toBeFalsy()

    act(() => current.handleCheckboxChange(cartData))
    expect(current.itemIsChecked(cartData)).toBeFalsy()
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
    } = renderHook(() => useCheckboxes(), { wrapper: MockProvider })

    expect(current.itemIsChecked(cartData)).toBeTruthy()
    act(() => current.handleCheckboxChange(cartData))
    expect(current.itemIsChecked(cartData)).toBeTruthy()
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

    const { result } = renderHook(() => useCheckboxes(), {
      wrapper: MockProvider,
    })

    expect(result.current.itemIsChecked(cartData)).toBeTruthy()
    act(() => result.current.handleCheckAllChange())
    expect(result.current.itemIsChecked(cartData)).toBeFalsy()
  })
})
