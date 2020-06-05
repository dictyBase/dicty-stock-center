import React from "react"
import { shallow } from "enzyme"
import VirtualizedList from "./VirtualizedList"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import Paper from "@material-ui/core/Paper"
import PhenotypeListHeader from "features/Stocks/SearchResults/PhenotypeListHeader"
import PhenotypeListItem from "features/Stocks/SearchResults/PhenotypeListItem"

describe("Stocks/SearchResults/ResultsHeader", () => {
  const props = {
    data: [
      {
        __typename: "Strain",
        genes: [""],
        id: "DBS123456",
        label: "counting strain",
        publications: [
          {
            __typename: "Publication",
            doi: "10.1128/ec.00242-09",
            id: "20008082",
          },
        ],
      },
      {
        __typename: "Strain",
        genes: [""],
        id: "DBS987654",
        label: "backwards strain",
        publications: [
          {
            __typename: "Publication",
            doi: "10.9999/ec.00000-00",
            id: "9127847",
          },
        ],
      },
    ],
    loadMoreItems: jest.fn(),
    headerComponent: <PhenotypeListHeader />,
  }
  const wrapper = shallow(
    <VirtualizedList {...props}>{PhenotypeListItem}</VirtualizedList>,
  )
  describe("initial render", () => {
    const infiniteLoader = wrapper
      .find(AutoSizer)
      .renderProp("children")({
        height: 535,
        width: 600,
      })
      .find(InfiniteLoader)
    const fixedSizeList = infiniteLoader
      .renderProp("children")({ onItemsRendered: jest.fn(), ref: jest.fn() })
      .find(FixedSizeList)
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(PhenotypeListHeader)).toHaveLength(1)
      expect(wrapper.find(AutoSizer)).toHaveLength(1)
    })
    it("renders InfiniteLoader", () => {
      expect(infiniteLoader).toHaveLength(1)
    })
    it("renders FixedSizeList", () => {
      expect(fixedSizeList).toHaveLength(1)
    })
    it("itemCount matches number of items in data", () => {
      expect(infiniteLoader.prop("itemCount")).toBe(props.data.length)
    })
    it("handles loadMoreItems", () => {
      infiniteLoader.props().loadMoreItems(0, 9)
      expect(props.loadMoreItems).toHaveBeenCalledTimes(1)
      expect(props.loadMoreItems).lastCalledWith(0, 9)
    })
  })
})
