import * as actions from "actions/page"
import { dsctypes } from "constants/dsctypes"
// import nock from "nock"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const { EDIT_PAGE } = dsctypes

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("page actions", () => {
  describe("edit page content", () => {
    it("should create an action to edit page content", () => {
      const content = "test"
      const expectedAction = {
        type: EDIT_PAGE,
        payload: {
          content,
        },
      }
      expect(actions.doEdit(content)).toEqual(expectedAction)
    })
  })
})

describe("page async actions", () => {
  describe("edit page content", () => {
    it("should edit page content", async () => {
      const content = ""
      const expectedActions = [{ type: EDIT_PAGE, payload: { content } }]
      const store = mockStore({})

      await store.dispatch(actions.doEdit(content))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  describe("edit inline page content", () => {
    it("should edit inline page content", async () => {
      const content = ""
      const expectedActions = [{ type: EDIT_PAGE, payload: { content } }]
      const store = mockStore({})

      await store.dispatch(actions.editInline(content))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
