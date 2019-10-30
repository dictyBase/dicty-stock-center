import React from "react"
import { shallow } from "enzyme"
import GraphQLErrorPage from "./GraphQLErrorPage"
import GraphQLNetworkError from "./GraphQLNetworkError"
import ServerError from "./ServerError"
import NotFoundError from "./NotFoundError"
import OtherError from "./OtherError"

describe("Errors/GraphQLErrorPage", () => {
  const networkErrProps = {
    error: {
      message: "Network error",
      networkError: {},
    },
  }
  const unavailableErrProps = {
    error: {
      message: "Unavailable error",
      graphQLErrors: [
        {
          message: "Currently unavailable",
          extensions: {
            code: "Unavailable",
          },
        },
      ],
    },
  }
  const notFoundErrProps = {
    error: {
      message: "Not found error",
      graphQLErrors: [
        {
          message: "Strain not found",
          extensions: {
            code: "NotFound",
          },
        },
      ],
    },
  }
  const otherErrProps = {
    error: {
      message: "Misc error",
      graphQLErrors: [
        {
          message: "misc error",
          extensions: {
            code: "Misc",
          },
        },
      ],
    },
  }
  describe("error handling", () => {
    it("renders correct component for network errors", () => {
      const wrapper = shallow(<GraphQLErrorPage {...networkErrProps} />)
      expect(wrapper.find(GraphQLNetworkError)).toHaveLength(1)
    })
    it("renders correct component for unavailable errors", () => {
      const wrapper = shallow(<GraphQLErrorPage {...unavailableErrProps} />)
      expect(wrapper.find(ServerError)).toHaveLength(1)
    })
    it("renders correct component for not found errors", () => {
      const wrapper = shallow(<GraphQLErrorPage {...notFoundErrProps} />)
      expect(wrapper.find(NotFoundError)).toHaveLength(1)
    })
    it("renders correct component for other errors", () => {
      const wrapper = shallow(<GraphQLErrorPage {...otherErrProps} />)
      expect(wrapper.find(OtherError)).toHaveLength(1)
    })
    it("does not render error component if no error passed", () => {
      const wrapper = shallow(<GraphQLErrorPage />)
      expect(wrapper.find(OtherError)).toHaveLength(0)
    })
  })
})
