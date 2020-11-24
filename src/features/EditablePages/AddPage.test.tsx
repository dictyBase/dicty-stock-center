import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AddPage from "./AddPage"
import { MockAuthProvider } from "common/utils/testing"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useParams: () => ({
      name: "order",
    }),
  }
})

describe("features/EditablePages/AddPage", () => {
  beforeEach(() => {
    // @ts-ignore
    window.getSelection = () => ({
      removeAllRanges: () => {},
    })
  })

  describe("initial render", () => {
    const props = {
      location: {
        state: {
          name: "shipping",
          url: "/information/shipping",
        },
      },
    }

    it("displays correct route", () => {
      render(
        <MockAuthProvider mocks={[]} validToken>
          <BrowserRouter>
            <AddPage {...props} />
          </BrowserRouter>
        </MockAuthProvider>,
      )
      expect(
        screen.getByText(/Add Editable Page for Route:/),
      ).toBeInTheDocument()
      expect(screen.getByText("/information/shipping")).toBeInTheDocument()
      screen.debug()
    })
  })
})
