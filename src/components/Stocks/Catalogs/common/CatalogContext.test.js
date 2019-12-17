import { catalogReducer } from "./CatalogContext"
import { catalogTypes } from "constants/catalogs"

describe("Stocks/Catalogs/common/CatalogContext", () => {
  describe("catalogReducer", () => {
    const initialState = {
      queryVariables: { cursor: 0 },
      checkedItems: [],
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
        queryVariables: action.payload,
        checkedItems: [],
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
        queryVariables: { cursor: 0 },
        checkedItems: action.payload,
      }
      expect(catalogReducer(initialState, action)).toEqual(expectedState)
    })
  })
})
