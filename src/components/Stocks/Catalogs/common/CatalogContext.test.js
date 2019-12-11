import { catalogReducer } from "./CatalogContext"
import { catalogTypes } from "constants/catalogs"
import { GET_PLASMID_LIST } from "queries/queries"

describe("Stocks/Catalogs/common/CatalogContext", () => {
  describe("catalogReducer", () => {
    const initialState = {
      query: GET_PLASMID_LIST,
      queryVariables: { cursor: 0 },
      checkedItems: [],
      cartDialogOpen: false,
    }
    it("returns initial state if no changes", () => {
      expect(catalogReducer(initialState, {})).toEqual(initialState)
    })

    it("should handle SET_QUERY_VARIABLES", () => {
      const action = {
        type: catalogTypes.SET_QUERY_VARIABLES,
        payload: { limit: 10 },
      }
      const expectedState = {
        query: GET_PLASMID_LIST,
        queryVariables: action.payload,
        checkedItems: [],
        cartDialogOpen: false,
      }
      expect(catalogReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_CHECKED_ITEMS", () => {
      const action = {
        type: catalogTypes.SET_CHECKED_ITEMS,
        payload: [
          {
            id: "DBS123456",
            label: "test1",
            summary: "this is a test summary",
          },
        ],
      }
      const expectedState = {
        query: GET_PLASMID_LIST,
        queryVariables: { cursor: 0 },
        checkedItems: action.payload,
        cartDialogOpen: false,
      }
      expect(catalogReducer(initialState, action)).toEqual(expectedState)
    })

    it("should handle SET_CART_DIALOG_OPEN", () => {
      const action = {
        type: catalogTypes.SET_CART_DIALOG_OPEN,
        payload: true,
      }
      const expectedState = {
        query: GET_PLASMID_LIST,
        queryVariables: { cursor: 0 },
        checkedItems: [],
        cartDialogOpen: true,
      }
      expect(catalogReducer(initialState, action)).toEqual(expectedState)
    })
  })
})
