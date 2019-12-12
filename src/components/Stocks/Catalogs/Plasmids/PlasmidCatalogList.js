// @flow
import React from "react"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/Catalogs/common/CatalogListHeader"
import PlasmidCatalogListItem from "./PlasmidCatalogListItem"
import { useCatalogStore } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"
import { CartItem } from "components/Stocks/Catalogs/types/cart"
import { GET_PLASMID_LIST } from "queries/queries"

type Props = {
  data: Array<CartItem>,
  fetchMore: Function,
  cursor: number,
}

/**
 * PlasmidCatalogList provides the virtualized list of data
 * (via react-window) and handles the checkbox state.
 */

export const PlasmidCatalogList = ({ data, fetchMore, cursor }: Props) => {
  const [{ queryVariables }] = useCatalogStore()
  const classes = useStyles()

  const loadMoreItems = () =>
    fetchMore({
      query: GET_PLASMID_LIST,
      variables: {
        cursor: cursor,
        filter: queryVariables.filter,
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
      <CatalogListHeader stockType="plasmid" />
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
