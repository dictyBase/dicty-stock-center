import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/react-testing"
import wait from "waait"
import { BrowserRouter } from "react-router-dom"
import PhenotypeContainer from "./PhenotypeContainer"
import PhenotypeList from "./PhenotypeList"
// import PhenotypeListItem from "./PhenotypeListItem"
import VirtualizedList from "common/components/VirtualizedList"
import ResultsHeader from "./ResultsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries"
import data from "./mockData"

const mockName = "abolished+protein+phosphorylation"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useParams: () => ({
      name: mockName,
    }),
  }
})

// jest.mock("react-virtualized-auto-sizer", () => ({
//   AutoSizer: ({ children }: AutoSizerProps) =>
//     children({ height: 500, width: 600 }),
// }))

// jest.mock("react-window-infinite-loader", () => ({
//   InfiniteLoader: ({ children }: any) =>
//     children({ onItemsRendered: jest.fn(), ref: jest.fn() }),
// }))

// jest.mock("react-window", () => {
//   const originalModule = require.requireActual("react-window")
//   return {
//     ...originalModule,
//     FixedSizeList: jest.fn(() => null),
//   }
// })

describe("Stocks/SearchResults/PhenotypeContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            limit: 10,
            phenotype: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithPhenotype: {
              nextCursor: 123456,
              strains: data,
            },
          },
        },
      },
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 123456,
            limit: 10,
            phenotype: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithPhenotype: {
              nextCursor: 0,
              strains: [
                {
                  genes: ["abcd"],
                  id: "DBS123456",
                  label: "counting strain",
                  publications: [
                    {
                      doi: "10.1128/ec.00242-09",
                      id: "20008082",
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <PhenotypeContainer />
        </BrowserRouter>
      </MockedProvider>,
    )
    it("renders Loading component first", () => {
      expect(wrapper.find(DetailsLoader)).toHaveLength(1)
    })
    it("renders expected components after receiving data", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(ResultsHeader)).toHaveLength(1)
      expect(wrapper.find(PhenotypeList)).toHaveLength(1)
      expect(wrapper.find(VirtualizedList)).toHaveLength(1)
      // console.log(wrapper.find(PhenotypeList).debug())
      // expect(wrapper.find(PhenotypeListItem)).toHaveLength(10)
    })
  })
  describe("error handling", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            filter: "",
          },
        },
        result: {
          errors: [
            {
              message: "Strains not found",
              path: [],
              extensions: { code: "NotFound" },
              locations: undefined,
              nodes: undefined,
              source: undefined,
              positions: undefined,
              originalError: undefined,
              name: "",
            },
          ],
        },
      },
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <PhenotypeContainer />
        </BrowserRouter>
      </MockedProvider>,
    )
    it("handles errors as expected", async () => {
      await wait()
      wrapper.update()
      expect(wrapper.find(GraphQLErrorPage)).toHaveLength(1)
    })
  })
})
