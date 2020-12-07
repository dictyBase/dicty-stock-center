import React from "react"
import { mount } from "enzyme"
import MyDscPage from "./MyDscPage"
import { BrowserRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import MyDscHeader from "./MyDscHeader"
import MyDscMainContent from "./MyDscMainContent"
import { AuthContext, authReducer } from "features/Authentication/AuthStore"

describe("MyDsc/MyDscPage", () => {
  const MockProvider = () => {
    const [state, dispatch] = React.useReducer(authReducer, {
      token: "xyz",
      user: {
        first_name: "Art",
        last_name: "Vandelay",
        email: "george@vandelayindustries.com",
      },
      provider: "google",
      isAuthenticated: true,
    })
    return (
      <AuthContext.Provider value={[state, dispatch]}>
        <BrowserRouter>
          <MyDscPage />
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }
  describe("initial render", () => {
    const wrapper = mount(<MockProvider />)
    it("always renders initial components", () => {
      expect(wrapper.find(MyDscHeader)).toHaveLength(1)
      expect(wrapper.find(MyDscMainContent)).toHaveLength(1)
      expect(wrapper.find(Grid)).toExist()
    })
  })
})
