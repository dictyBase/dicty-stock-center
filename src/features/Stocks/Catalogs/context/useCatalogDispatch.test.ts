import { renderHook } from "@testing-library/react-hooks"
import useCatalogDispatch from "./useCatalogDispatch"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import { CatalogActionType } from "./CatalogContext"
import { StrainListDocument } from "dicty-graphql-schema"

const mockDispatch = jest.fn()

jest.mock("features/Stocks/Catalogs/context/useCatalogStore")
const mockedUseCatalogStore = useCatalogStore as jest.Mock
mockedUseCatalogStore.mockReturnValue({
  dispatch: mockDispatch,
})

describe("features/Stocks/Catalogs/context/useCatalogDispatch", () => {
  it("should dispatch search value", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    result.current.setSearchValue("gwdi")
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_SEARCH_VALUE,
      payload: "gwdi",
    })
  })

  it("should dispatch searchbox dropdown value", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    result.current.setSearchBoxDropdownValue("summary")
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_SEARCHBOX_DROPDOWN_VALUE,
      payload: "summary",
    })
  })

  it("should dispatch left dropdown value", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    result.current.setLeftDropdownValue("available")
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_LEFT_DROPDOWN_VALUE,
      payload: "available",
    })
  })

  it("should dispatch query", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    result.current.setQuery(StrainListDocument)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_QUERY,
      payload: StrainListDocument,
    })
  })

  it("should dispatch query variables", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    const vars = {
      cursor: 0,
      limit: 10,
      filter: "label~=gwdi",
    }
    result.current.setQueryVariables(vars)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_QUERY_VARIABLES,
      payload: vars,
    })
  })

  it("should dispatch help dialog boolean", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    result.current.setHelpDialogOpen(true)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_HELP_DIALOG_OPEN,
      payload: true,
    })
  })

  it("should dispatch active filters", () => {
    const { result } = renderHook(() => useCatalogDispatch())
    const filters = ["Regular"]
    result.current.setActiveFilters(filters)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: CatalogActionType.SET_ACTIVE_FILTERS,
      payload: [...filters],
    })
  })
})
