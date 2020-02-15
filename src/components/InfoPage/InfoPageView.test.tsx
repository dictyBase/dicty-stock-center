import React from "react"
import { mount } from "enzyme"
import InfoPageView from "./InfoPageView"
import { Editor } from "draft-js"
import { BrowserRouter } from "react-router-dom"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("InfoPage/InfoPageView", () => {
 describe("initial render", () => {
   const props = {
     data: {}
     classes: {}
   }
   const mocks = []
   const MockProvider = ({ children }) => {
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
         <MockedProvider mocks={mocks} addTypename={false}>
           <BrowserRouter>{children}</BrowserRouter>
         </MockedProvider>
       </AuthContext.Provider>
     )
   }
   const wrapper = mount(
     <MockProvider>
       <InfoPageView {...props} />
     </MockProvider>,
   )
   it("renders initial components", () => {
     expect(wrapper.find(Editor)).toHaveLength(1)
   })
 })
})
