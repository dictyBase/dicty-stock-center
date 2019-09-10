// @flow
import React from "react"
import gql from "graphql-tag"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/CatalogPageItems/CatalogListHeader"
import PlasmidCatalogListItem from "./PlasmidCatalogListItem"
import { usePlasmidCatalogState } from "./PlasmidCatalogContext"

const GET_MORE_PLASMIDS_LIST = gql`
  query MorePlasmidsList($cursor: Int!, $filter: String) {
    listPlasmids(input: { cursor: $cursor, limit: 10, filter: $filter }) {
      nextCursor
      plasmids {
        id
        name
        summary
        in_stock
      }
    }
  }
`

const useStyles = makeStyles({
  catalogPaper: {
    height: 600,
    width: "100%",
  },
})

type Props = {
  data: Array<{
    label: string,
    id: string,
    summary: string,
  }>,
  fetchMore: Function,
  cursor: number,
  filter: string,
}

/**
 * PlasmidCatalogList provides the virtualized list of data
 * (via react-window) and handles the checkbox state.
 */

const PlasmidCatalogList = ({ data, fetchMore, cursor, filter }: Props) => {
  const {
    checkedItems,
    setCheckedItems,
    handleCheckAllChange,
  } = usePlasmidCatalogState()
  const classes = useStyles()

  const loadMoreItems = () =>
    fetchMore({
      query: GET_MORE_PLASMIDS_LIST,
      variables: {
        cursor: cursor,
        filter: filter,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult
        const previousEntry = previousResult.listPlasmids
        const previousPlasmids = previousEntry.plasmids
        const newPlasmids = fetchMoreResult.listPlasmids.plasmids
        const newCursor = fetchMoreResult.listPlasmids.nextCursor
        const allPlasmids = [...previousPlasmids, ...newPlasmids]

        // fix issue where response always brings back a duplicate of last item;
        // check if first item of new batch equals last item of previous batch
        // if dupes, then remove it
        if (
          newPlasmids[0].id === previousPlasmids[previousPlasmids.length - 1].id
        ) {
          allPlasmids.pop()
        }

        return {
          listPlasmids: {
            nextCursor: newCursor,
            plasmids: [...new Set(allPlasmids)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

  const isItemLoaded = ({ index }) => !!data[index]

  return (
    <Paper className={classes.catalogPaper}>
      <CatalogListHeader
        stockType="plasmid"
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        handleCheckAllChange={handleCheckAllChange}
      />
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={data.length}
            loadMoreItems={loadMoreItems}>
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                onItemsRendered={onItemsRendered}
                ref={ref}
                height={535}
                width={width}
                itemSize={50}
                itemCount={data.length}
                // pass props to PlasmidCatalogListItem via itemData
                itemData={{
                  item: data,
                }}>
                {PlasmidCatalogListItem}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Paper>
  )
}

export default PlasmidCatalogList
