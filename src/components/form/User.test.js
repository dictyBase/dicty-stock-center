import React from "react"
import "jest-styled-components"
import "../../setupTests"
import User from "./User"
import Contact from "./Contact"
import Personal from "./Personal"
import Organization from "./Organization"
import Address from "./Address"
import { shallow } from "enzyme"

describe("form/User", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <User
        firstName={{ value: "John" }}
        lastName={{ value: "Smith" }}
        email={{ value: "john@gmail.com" }}
        org={{ value: "NU" }}
        group={{ value: "Bio" }}
        address={{ value: "N Michigan Ave" }}
        address2={{ value: "" }}
        city={{ value: "Chicago" }}
        state={{ value: "IL" }}
        zip={{ value: "60555" }}
        country={{ value: "USA" }}
        phone={{ value: "7778859988" }}
        title={"User"}
      />,
    )
  })

  it("should render <Personal> with correct props", () => {
    expect(
      wrapper.contains(
        <Personal
          firstName={{ value: "John" }}
          lastName={{ value: "Smith" }}
          email={{ value: "john@gmail.com" }}
        />,
      ),
    ).toEqual(true)
  })

  it("should render <Organization> with correct props", () => {
    expect(
      wrapper.contains(
        <Organization org={{ value: "NU" }} group={{ value: "Bio" }} />,
      ),
    ).toEqual(true)
  })

  it("should render <Address> with correct props", () => {
    expect(
      wrapper.contains(
        <Address
          address={{ value: "N Michigan Ave" }}
          address2={{ value: "" }}
          city={{ value: "Chicago" }}
          state={{ value: "IL" }}
          zip={{ value: "60555" }}
          country={{ value: "USA" }}
        />,
      ),
    ).toEqual(true)
  })

  it("should render <Contact> with correct props", () => {
    expect(
      wrapper.contains(<Contact phone={{ value: "7778859988" }} />),
    ).toEqual(true)
  })
})
