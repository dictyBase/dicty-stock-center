import { catalogReducer, CatalogActionType } from "./CatalogContext"
import { GET_STRAIN_LIST } from "common/graphql/queries"

describe("Stocks/Catalogs/common/CatalogContext", () => {
  describe("catalogReducer", () => {
    const initialState = {
      queryVariables: { cursor: 0, limit: 10, filter: "" },
      checkedItems: [],
      leftDropdownValue: "all",
      searchValue: "",
      helpDialogOpen: false,
      query: GET_STRAIN_LIST,
      searchBoxDropdownValue: "label",
    }
    it("returns initial state if no changes", () => {
      expect(
        catalogReducer(initialState, {
          type: CatalogActionType.SET_HELP_DIALOG_OPEN,
          payload: false,
        }),
      ).toEqual(initialState)
    })

    it("should handle SET_QUERY_VARIABLES", () => {
      const type = CatalogActionType.SET_QUERY_VARIABLES
      const payload = {
        cursor: 0,
        filter: "label~=GWDI",
        limit: 10,
      }
      const expectedState = {
        ...initialState,
        queryVariables: payload,
      }
      expect(
        catalogReducer(initialState, {
          type,
          payload,
        }),
      ).toEqual(expectedState)
    })

    it("should handle SET_CHECKED_ITEMS", () => {
      const type = CatalogActionType.SET_CHECKED_ITEMS
      const payload = [
        {
          id: "DBS123456",
          label: "test1",
          summary: "this is a test summary",
        },
      ]
      const expectedState = {
        ...initialState,
        checkedItems: payload,
      }
      expect(catalogReducer(initialState, { type, payload })).toEqual(
        expectedState,
      )
    })

    it("should handle SET_SEARCHBOX_DROPDOWN_VALUE", () => {
      const type = CatalogActionType.SET_SEARCHBOX_DROPDOWN_VALUE
      const payload = "label"
      const expectedState = {
        ...initialState,
        searchBoxDropdownValue: payload,
      }
      expect(
        catalogReducer(initialState, {
          type,
          payload,
        }),
      ).toEqual(expectedState)
    })

    it("should handle SET_SEARCH_VALUE", () => {
      const type = CatalogActionType.SET_SEARCH_VALUE
      const payload = "tester"
      const expectedState = {
        ...initialState,
        searchValue: payload,
      }
      expect(
        catalogReducer(initialState, {
          type,
          payload,
        }),
      ).toEqual(expectedState)
    })

    it("should handle SET_LEFT_DROPDOWN_VALUE", () => {
      const type = CatalogActionType.SET_LEFT_DROPDOWN_VALUE
      const payload = "gwdi"
      const expectedState = {
        ...initialState,
        leftDropdownValue: payload,
      }
      expect(
        catalogReducer(initialState, {
          type,
          payload,
        }),
      ).toEqual(expectedState)
    })

    it("should handle SET_HELP_DIALOG_OPEN", () => {
      const type = CatalogActionType.SET_HELP_DIALOG_OPEN
      const payload = true
      const expectedState = {
        ...initialState,
        helpDialogOpen: true,
      }
      expect(
        catalogReducer(initialState, {
          type,
          payload,
        }),
      ).toEqual(expectedState)
    })
  })
})
