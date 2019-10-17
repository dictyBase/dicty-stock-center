import React from "react"
import { shallow } from "enzyme"
import { MyDscPage } from "./MyDscPage"
import Grid from "@material-ui/core/Grid"
import MyDscBreadcrumbs from "./MyDscBreadcrumbs"
import MyDscHeader from "./MyDscHeader"
import MyDscMainContent from "./MyDscMainContent"

describe("MyDsc/MyDscPage", () => {
  describe("initial render", () => {
    const props = {
      auth: {
        user: {
          data: {
            id: "123",
            attributes: {
              email: "george@costanza.com",
              name: "George Costanza",
            },
          },
        },
        provider: "google",
      },
    }
    const wrapper = shallow(<MyDscPage {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(MyDscBreadcrumbs)).toHaveLength(1)
      expect(wrapper.find(MyDscHeader)).toHaveLength(1)
      expect(wrapper.find(MyDscMainContent)).toHaveLength(1)
      expect(wrapper.find(Grid)).toHaveLength(4)
    })
  })
})
