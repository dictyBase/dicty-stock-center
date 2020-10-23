import React from "react"
import { mount } from "enzyme"
import { MockedProvider } from "@apollo/client/testing"
import wait from "waait"
import { BrowserRouter } from "react-router-dom"
import PhenotypeContainer from "./PhenotypeContainer"
import PhenotypeList from "./PhenotypeList"
import ResultsHeader from "./ResultsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import { GET_STRAIN_LIST_WITH_PHENOTYPE } from "common/graphql/queries"
import data from "./mockData"

const mockParams = "abolished+protein+phosphorylation"

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useParams: () => ({
      name: mockParams,
    }),
  }
})

describe("Stocks/SearchResults/PhenotypeContainer", () => {
  describe("initial render", () => {
    const mocks = [
      {
        request: {
          query: GET_STRAIN_LIST_WITH_PHENOTYPE,
          variables: {
            cursor: 0,
            limit: 10000,
            phenotype: "abolished protein phosphorylation",
          },
        },
        result: {
          data: {
            listStrainsWithPhenotype: {
              totalCount: 1,
              strains: data,
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
    })
  })
})
