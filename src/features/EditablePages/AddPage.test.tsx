import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter, useHistory } from "react-router-dom"
import AddPage from "./AddPage"
import waitForExpect from "wait-for-expect"
import { CREATE_CONTENT } from "common/graphql/mutations"
import { MockAuthProvider } from "common/utils/testing"

const mockHistoryPush = jest.fn()

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useHistory: jest.fn(),
  }
})

window.getSelection = jest.fn()

const mockContent = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
      {
        object: "block",
        type: "paragraph",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Add your page content here...",
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
}

describe("features/EditablePages/AddPage", () => {
  const MockComponent = ({ mocks }: any) => (
    <MockAuthProvider mocks={mocks} validToken>
      <BrowserRouter>
        <AddPage />
      </BrowserRouter>
    </MockAuthProvider>
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("initial render", () => {
    it("displays header and textbox", () => {
      render(<MockComponent mocks={[]} />)
      expect(
        screen.getByText(/Add Editable Page for Route:/),
      ).toBeInTheDocument()
      const textbox = screen.getByPlaceholderText(/Enter route here.../)
      expect(textbox).toBeInTheDocument()
      expect(textbox).toBeEmptyDOMElement()
    })
  })

  describe("button clicking", () => {
    it("should save data and redirect on click", async () => {
      ;(useHistory as jest.Mock).mockReturnValueOnce({
        push: mockHistoryPush,
      })
      const textInput = "shipping"
      const mocks = [
        {
          request: {
            query: CREATE_CONTENT,
            variables: {
              input: {
                name: textInput,
                created_by: 999,
                content: JSON.stringify(mockContent),
                namespace: "dsc",
              },
            },
          },
          result: {
            data: {
              createContent: {
                name: textInput,
                created_by: {
                  id: 999,
                },
                content: JSON.stringify(mockContent),
                namespace: "dsc",
              },
            },
          },
        },
      ]
      render(<MockComponent mocks={mocks} />)
      const textbox = screen.getByPlaceholderText(/Enter route here.../)
      userEvent.type(textbox, textInput)
      // there are two save buttons, one in toolbar and one at bottom
      const saveButtons = screen.getAllByText("Save")
      userEvent.click(saveButtons[0])
      await waitForExpect(() => {
        expect(
          screen.getByText(/Add your page content here.../),
        ).toBeInTheDocument()
        // need to use timer to match component behavior
        setTimeout(() => {
          expect(mockHistoryPush).toHaveBeenCalledWith(
            `/information/${textInput}`,
          )
        }, 1000)
      })
    })

    it("should display error message if saving empty route", () => {
      render(<MockComponent mocks={[]} />)
      // there are two save buttons, one in toolbar and one at bottom
      const saveButtons = screen.getAllByText("Save")
      userEvent.click(saveButtons[0])
      expect(
        screen.getByText(/Please enter a route before saving/),
      ).toBeInTheDocument()
    })

    it("should go back to information page on cancel", () => {
      ;(useHistory as jest.Mock).mockReturnValueOnce({
        push: mockHistoryPush,
      })
      render(<MockComponent mocks={[]} />)
      const cancelButton = screen.getByText("Cancel")
      userEvent.click(cancelButton)
      expect(mockHistoryPush).toHaveBeenCalledWith("/information")
    })
  })
})
