import {
  catalogReducer,
  CatalogActionType,
  getGraphQLFilterFromSearchQuery,
  getGraphQLQueryFromSearchQuery,
} from "./CatalogContext"
import {
  GET_STRAIN_LIST,
  GET_PLASMID_LIST,
  GET_BACTERIAL_STRAIN_LIST,
  GET_STRAIN_INVENTORY_LIST,
} from "common/graphql/queries/stocks/lists"

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
          // @ts-ignore
          type: "NOT_A_REAL_ACTION",
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

  describe("getGraphQLQueryFromSearchQuery", () => {
    it("should return query for bacterial strain", () => {
      const params = new URLSearchParams("?filter=bacterial")
      expect(getGraphQLQueryFromSearchQuery("strain", params)).toBe(
        GET_BACTERIAL_STRAIN_LIST,
      )
    })
    it("should return query for all plasmids", () => {
      const params = new URLSearchParams("?filter=all")
      expect(getGraphQLQueryFromSearchQuery("plasmid", params)).toBe(
        GET_PLASMID_LIST,
      )
    })
    it("should return query for all strains", () => {
      const params = new URLSearchParams("?filter=gwdi")
      expect(getGraphQLQueryFromSearchQuery("strain", params)).toBe(
        GET_STRAIN_LIST,
      )
    })
    it("should return query for available strains", () => {
      const params = new URLSearchParams("?filter=available")
      expect(getGraphQLQueryFromSearchQuery("strain", params)).toBe(
        GET_STRAIN_INVENTORY_LIST,
      )
    })
  })

  describe("getGraphQLFilterFromSearchQuery", () => {
    it("should return filter for label", () => {
      const params = new URLSearchParams("?filter=all&label=gwdi")
      expect(getGraphQLFilterFromSearchQuery(params)).toBe("label=~gwdi")
    })
    it("should return filter for summary", () => {
      const params = new URLSearchParams("?filter=all&summary=tester")
      expect(getGraphQLFilterFromSearchQuery(params)).toBe("summary=~tester")
    })
    it("should return filter for ID", () => {
      const params = new URLSearchParams("?filter=all&id=999")
      expect(getGraphQLFilterFromSearchQuery(params)).toBe("id=~999")
    })
    it("should return filter for plasmid name", () => {
      const params = new URLSearchParams("?filter=all&plasmid_name=pDM314")
      expect(getGraphQLFilterFromSearchQuery(params)).toBe(
        "plasmid_name=~pDM314",
      )
    })
    it("should return filter for description", () => {
      const params = new URLSearchParams("?filter=all&description=vector")
      expect(getGraphQLFilterFromSearchQuery(params)).toBe(
        "description=~vector",
      )
    })
  })
})
